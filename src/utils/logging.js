// A-Frame blows away any npm debug log filters so this allow the user to set the log filter
// via the query string.
import debug from "debug";
import qsTruthy from "./qs_truthy";

const qs = new URLSearchParams(location.search);
const isDebug = qsTruthy("debug");
const logFilter = qs.get("log_filter") || (isDebug && "naf-janus-adapter:*,naf-dialog-adapter:*,mediasoup*");

if (logFilter) {
  debug.enable(logFilter);
}

// Dump environmental data to log for debug reference
export function writeEnvironmentToConsole() {

  const addRow = function(property, value, level) {
    var valueFormat = "font-weight:inherit;font-style:italic;";
    switch(level) {
      case("success"): valueFormat += "color:lime;"; break;
      case("warn"): valueFormat += "color:orange;"; break;
      case("error"): valueFormat += "color:red;"; break;
    }
    console.log("%c" + property.padEnd(32) + "%c" + value, "font-weight:bold", valueFormat);
  }

  // Header
  console.log("%c" + "Property".padEnd(32) + "Value", "font-weight:bold");

  /* Environment */

  addRow("URL", window.location.href);
  addRow("Platform", navigator.platform);
  addRow("Language", navigator.language + " (" + navigator.languages + ")");
  addRow("User Agent", navigator.userAgent);
  addRow("Cookies Enabled", navigator.cookieEnabled);
  if(navigator.connection) {
    if(navigator.connection.type) {
      addRow("Connection Type", navigator.connection.type);
    }
    if(navigator.connection.downlink) {
      addRow("Connection Downlink", navigator.connection.downlink + " Mbps");
    }
    if(navigator.connection.rtt) {
      addRow("Connection RTT", navigator.connection.rtt + " ms");
    }
    if(navigator.connection.downlinkMax) {
      addRow("Connection Downlink Max", navigator.connection.downlinkMax + " Mbps");
    }
    if(navigator.connection.effectiveType) {
      addRow("Connection Effective Type", navigator.connection.effectiveType);
    }
    if(navigator.connection.saveData) {
      addRow("Connection Save Data", navigator.connection.saveData);
    }
  }
  if(navigator.deviceMemory) {
    addRow("Device Memory", navigator.deviceMemory + " GiB");
  }

  addRow("Cross-Origin Isolated", crossOriginIsolated, crossOriginIsolated ? "success" : "warn");

		/* Browser Capabiltities */

		// Storage API (blocked in some security contexts)

		try {
			if(window.localStorage) {
				addRow("Local Storage", "Available", "success");
			} else {
				addRow("Local Storage", "Not Available", "error");
			}
		} catch(error) {
			addRow("Local Storage", error, "error");
		}
		try {
			if(window.sessionStorage) {
				addRow("Session Storage", "Available", "success");
			} else {
				addRow("Session Storage", "Not Available", "error");
			}
		} catch(error) {
			addRow("Session Storage", error, "error");
		}


		// WebGL and WebXR	

		try {
			var canvas = document.createElement('canvas');
			if(!!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))) {
				addRow("WebGL", "Available", "success");
			} else {
				addRow("WebGL", "Not Available", "error");
			}
		} catch ( e ) {
			addRow("WebGL", e, "error");
		}
		try {
			var canvas = document.createElement( 'canvas' );
			if(!!(window.WebGL2RenderingContext && canvas.getContext('webgl2'))) {
				addRow("WebGL2", "Available", "success");
			} else {
				addRow("WebGL2", "Not Available", "warn");
			}
		} catch ( e ) {
			addRow("WebGL2", e, "warn");
		}
		if(navigator.xr) {
			navigator.xr.isSessionSupported("inline").then(function(result) {
				if(result) {
					addRow("WebXR Inline", "Available", "success");
				} else {
					addRow("WebXR Inline", "Not Available", "error");
				}
			});
			// Not currently supported
			// navigator.xr.isSessionSupported("immersive-vr").then(function(result) {
			// 	if(result) {
			// 		addRow("WebXR Immersive VR", "Available", "success");
			// 	} else {
			// 		addRow("WebXR Immersive VR", "Not Available", "warn");
			// 	}
			// });
		} else {
			addRow("WebXR", "Not Available", "warn");
		}

		if(navigator.permissions) {
			const testPermission = function(permissionName, displayName) {
				navigator.permissions.query({name: permissionName}).then(function(result) {
					if (result.state == "granted") {
						addRow(displayName, "Granted", "success");
					} else if (result.state == "prompt") {
						addRow(displayName, "Prompt", "success");
					} else {
						addRow(displayName, "Blocked", "error");
					}
				}).catch(function(e) {
					if (e instanceof TypeError) {
						addRow(displayName, "Test Not Supported", "warn");
					} else {
						addRow(displayName, e, "error");
					}					
				});
			}

			testPermission("microphone", "Microphone Permission");
			testPermission("camera", "Camera Permission");
			testPermission("clipboard-write", "Clipboard Write Permission");

			if(!!window.WebAssembly) {
				addRow("Web Assembly", "Available", "success");
			} else {
				addRow("Web Assembly", "Not Available", "error");
			}

			if("RTCPeerConnection" in window) {
				addRow("WebRTC", "Available", "success");
			} else {
				addRow("WebRTC", "Not Available", "error");
			}

    }
}
