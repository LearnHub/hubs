// Duplicated as avnsw.js and hubs.service.js

var altServers = undefined
var nextCheckTimestamp = undefined

const avnfsStats = {
    hosts: [ "avnfs.com" ],
    fetchCount: 0,
}
const info = {
    scope: "",
    activated: new Date(),
    servers: {
        "AVNFS": avnfsStats
    }
}

async function checkAltServers() {
    const now = Date.now()
    if (!nextCheckTimestamp || now > nextCheckTimestamp ) {
        // Don't check more often than every 60 minutes
        nextCheckTimestamp = now + 60 * 60_000
        // ALT_SERVER_TESTING once every 5 minutes for testing
        nextCheckTimestamp = now +  5 * 60_000
        try {
            console.log("AVNSW downloading altservers...")
            const response = await fetch("https://rest.avncloud.com/v1/avnfs/altservers") // https://rest-alpha.avncloud.com/v1/avnfs/altservers http://localhost:8181/v1/avnfs/altservers
            if (response.ok) {
                const newAltServers = await response.json()
                console.log("AVNSW new altservers downloaded", newAltServers)
                altServers = newAltServers
                // Report info statistics to all clients
                const allClients = await self.clients.matchAll()
                for(let client of allClients) {
                    client.postMessage({ info })                    
                }
            } else {
                console.error(`AVNSW error getting altservers: '${response.statusText} (${response.status})`)
            }
        } catch (e) {
            console.error(`AVNSW exception getting altservers`, e)
        }
    }
}

self.addEventListener("fetch", (event) => {
    // Intercept only AVNFS GET methods
    if (!event.request.url.startsWith("https://avnfs.com") || event.request.method !== "GET") {
        return
    }
    // Best effort download is asynchronous to avoid blocking
    checkAltServers()
    if (!altServers) {
        return
    }
    // Override the response
    event.respondWith(
        (async () => {
            // For every alt server
            for (let altServer of altServers) {
                // Check there is a statistic record for this client
                let altServerStats = info.servers[altServer.clientId]
                if(!altServerStats) {
                    altServerStats = {
                        hosts: altServer.hosts,
                        serverType: altServer.type,
                        fetchCount: 0,
                        latencyTotal: 0,
                        errorCount: 0,
                        // errorTime: null,
                        // errorMessage: null,
                        // errorUrl: null,
                    }
                    info.servers[altServer.clientId] = altServerStats
                }
                // For every host on the alt server
                for (let host of altServer.hosts) {
                    let altServerFailed = false
                    const altUrl = event.request.url.replace("avnfs.com", host)
                    try {
                        const start = Date.now()
                        const altResponse = await fetch(altUrl, { signal: event.request.signal, keepalive: event.request.keepalive } )
                        if (altResponse.ok) {
                            // console.debug(`AVNSW AltServer cache hit for ${altUrl}`)
                            altServerStats.fetchCount++
                            altServerStats.latencyTotal += Date.now() - start
                            return altResponse
                        } else {
                            console.error(`AVNSW error getting cache for '${altUrl}': '${altResponse.statusText}' (${altResponse.status})`)
                            altServerStats.errorCount++
                            altServerStats.errorMessage = `${altResponse.statusText} (${altResponse.status})`
                            altServerStats.errorUrl = event.request.url
                            altServerStats.errorTime = new Date()
                            altServerFailed = true
                        }
                    } catch (e) {
                        console.error(`AVNSW exception getting cache for '${altUrl}'`, e)
                        ++altServerStats.errorCount
                        altServerStats.errorMessage = e.toString()
                        altServerStats.errorUrl = event.request.url
                        altServerStats.errorTime = new Date()
                        altServerFailed = true
                    }
                    // Don't try that host again (TODO: this could be smarter)
                    if(altServerFailed) {
                        // Update the hosts list for future calls
                        altServer.hosts = altServer.hosts.filter(it => it != host)
                    }
                }
            }
            avnfsStats.fetchCount++
            // Revert to the default behaviour
            return fetch(event.request)
        })(),
    )
})

self.addEventListener("install", (event) => {
    console.log("AVNSW installed", event)
    self.skipWaiting()
})

self.addEventListener("activate", (event) => {
    console.log("AVNSW activated")
    event.waitUntil(clients.claim())
    info.scope = self.registration.scope
    info.activated = new Date()
})