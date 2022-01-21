// Record the console log for saving

var consoleHistory = null;

// Save recorded log to file
export default function SaveConsoleLog() {
  if(consoleHistory) {
    consoleHistory.saveToFile();
  } else {
    console.error("Unexpected call when log recording is disabled");
  }
}

// AVN: Make record_log opt-out by default
if ('URLSearchParams' in window && (new URLSearchParams(window.location.search).get("record_log") || "true") == "true") {
  
  class ConsoleHistory {
    constructor(maximumEntries) {
      this.entries = new Array();
      this.maximumEntries = maximumEntries;
    }

    record(logLevel, argArray, error) {
      const entry = {
        "time": new Date(),
        "level": logLevel,       
        "args": argArray, 
      };
      if(error) {
        entry["stack"] = error.stack;
      }
      // Circular references can crash JSON.stringify
      // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
      const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
              return "∞";
            }
            seen.add(value);
          }
          return value;
        };
      };
      let json = "{}";
      // Large objects can throw RangeError: Invalid string length
      try {    
        json = JSON.stringify(entry, getCircularReplacer());
      } catch(e) {
        // Replace problematic args and try again
        const newArgArray = ["record-log-serialization-error", e];
        origConsoleError.apply(null, newArgArray);        
        entry["args"] = newArgArray;
        json = JSON.stringify(entry, getCircularReplacer());
      }
      // Add the new entry and ensure the list doesn't grow too long
      if(this.entries.push(json) > this.maximumEntries) {
        this.entries.shift();
      }
    }

    saveToFile() {
      // Compose JSON array from log record
      const json = "[\n" + this.entries.join(",\n") + "\n]";
      const fileName = document.title + ' ' + new Date().toISOString().substr(0, 19) + '.json';
      const linkEl = document.createElement('a');
      const url = URL.createObjectURL(new Blob([json], { type:"text/json" }) );
      linkEl.href = url;
      linkEl.setAttribute('download', fileName);
      linkEl.innerHTML = 'Saving...';
      linkEl.style.display = 'none';
      document.body.appendChild(linkEl);
      linkEl.click();
      document.body.removeChild(linkEl);
    }

  }

  consoleHistory = new ConsoleHistory(1000);

  // Intercept the built-in console methods

  const origConsoleLog = console.log;
  console.log = function() {
    origConsoleLog.apply(null, arguments);
    consoleHistory.record("log", Array.from(arguments));
  };

  const origConsoleInfo = console.info;
  console.info = function() {
    origConsoleInfo.apply(null, arguments);
    consoleHistory.record("info", Array.from(arguments));
  };

  const origConsoleWarn = console.warn;
  console.warn = function() {
    origConsoleWarn.apply(null, arguments);
    consoleHistory.record("warn", Array.from(arguments), new Error());
  };

  const origConsoleError = console.error;
  console.error = function() {
    origConsoleError.apply(null, arguments);
    consoleHistory.record("error", Array.from(arguments), new Error());
  };

  const origConsoleDebug = console.debug;
  console.debug = function() {
    origConsoleDebug.apply(null, arguments);
    consoleHistory.record("debug", Array.from(arguments));
  };

  // Additional top-level error handlers

  window.onunhandledrejection = e => consoleHistory.record("error", [e]);
  window.onerror = (msg, file, line, col, error) => consoleHistory.record("error", [msg], error);

  // Listen for browser deprecations and interventions. Ref https://developers.google.com/web/updates/2018/07/reportingobserver

  if ('ReportingObserver' in window) {
    const observer = new ReportingObserver((reports, observer) => {
      for (const report of reports) {
        console.warn("[ReportingObserver]", report);
      }
    }, {buffered: true});
    observer.observe();
  }

  // Listen for CSP violations https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent

  document.addEventListener("securitypolicyviolation", (e) => {
    console.warn("[CSP]", e.blockedURI, e.violatedDirective, e.originalPolicy);
  });

  // Listen for performance issues

  if ('PerformanceObserver' in window) {
    // Only report when the last longest duration is exceeded to cut down on console spam
    let longestDuration = 0;
    const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if(entry.duration > longestDuration) {
          console.warn('[PerformanceObserver]', entry);
          longestDuration = entry.duration;
        }
      }
    });
    observer.observe({entryTypes: ['longtask', /*'element', 'navigation', 'resource', 'mark', 'measure', 'paint'*/]});
  }

  // Not captured in shadow log:
  // - Mixed Content https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content
  // - Chrome performance violations of the form [Violation] 'X' handler took Yms

  console.log("Console log record initialized");

}