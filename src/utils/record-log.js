// Record the console log for saving

var consoleHistory = null;

// Save recorded log to file
export function SaveConsoleLog() {
  if (consoleHistory) {
    consoleHistory.saveToFile();
  } else {
    console.error("Unexpected call when log recording is disabled");
  }
}

// Monkey patch for serializing BigInt https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json
BigInt.prototype.toJSON = function() { return this.toString() }

// Circular references can crash JSON.stringify
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
function getSerializationTransform(depthLimit) {
  const seen = new WeakSet();
  return (key, value) => {
    try {
      --depthLimit;
      const valueType = typeof value;
      if (value != null) {
        if (valueType === "object") {
          // Check for circular references
          if (seen.has(value)) {
            return "∞";
          }
          seen.add(value);
          // Allow recursion into arrays
          if (Array.isArray(value)) {
            return value;
          }
          if(depthLimit > 0) {
            return value;
          } else {
            return "[snip]";
          }
        }
      }
      return value;
    } finally {
      ++depthLimit;
    }
  };
};

// AVN: Make record_log opt-out by default
if (true && 'URLSearchParams' in window && (new URLSearchParams(window.location.search).get("record_log") || "true") == "true") {

  class ConsoleHistory {
    constructor(maximumEntries) {
      this.entries = new Array();
      this.maximumEntries = maximumEntries;
    }

    record(logLevel, argArray, error) {
      let argJson = "[]";
      // Large objects can throw RangeError: Invalid string length
      try {
        // Prevent excessive recursion for brevity
        argJson = JSON.stringify(argArray, getSerializationTransform(2));
      } catch (e) {
        // Replace problematic args and report the error at least
        const newArgArray = ["record-log-serialization-error-args", e];
        origConsoleError.apply(null, newArgArray);
        argJson = JSON.stringify(newArgArray);
      }
      let stackJson = "";
      if (error) {
        try {
          stackJson = `, "stack": ${JSON.stringify(error.stack)}`;
        } catch (e) {
          const newArgArray = ["record-log-serialization-error-stack", e];
          origConsoleError.apply(null, newArgArray);
        }
      }
      let json = `{ "time": "${new Date().toISOString()}", "level": "${logLevel}", "args": ${argJson} ${stackJson} }`;
      // Add the new entry and ensure the list doesn't grow too long
      if (this.entries.push(json) > this.maximumEntries) {
        this.entries.shift();
      }
    }

    saveToFile() {
      // Compose JSON array from log record
      const json = "[\n" + this.entries.join(",\n") + "\n]";
      const fileName = new Date().toISOString().substring(0, 19) + '.json';
      const linkEl = document.createElement('a');
      const url = URL.createObjectURL(new Blob([json], { type: "text/json" }));
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
  console.log = function () {
    origConsoleLog.apply(null, arguments);
    consoleHistory.record("log", Array.from(arguments));
  };

  const origConsoleInfo = console.info;
  console.info = function () {
    origConsoleInfo.apply(null, arguments);
    consoleHistory.record("info", Array.from(arguments));
  };

  const origConsoleWarn = console.warn;
  console.warn = function () {
    origConsoleWarn.apply(null, arguments);
    consoleHistory.record("warn", Array.from(arguments), new Error());
  };

  const origConsoleError = console.error;
  console.error = function () {
    origConsoleError.apply(null, arguments);
    consoleHistory.record("error", Array.from(arguments), new Error());
  };

  const origConsoleDebug = console.debug;
  console.debug = function () {
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
    }, { buffered: true });
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
        if (entry.duration > longestDuration) {
          console.warn('[PerformanceObserver]', entry);
          longestDuration = entry.duration;
        }
      }
    });
    observer.observe({ entryTypes: ['longtask', /*'element', 'navigation', 'resource', 'mark', 'measure', 'paint'*/] });
  }

  // Not captured in shadow log:
  // - Mixed Content https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content
  // - Chrome performance violations of the form [Violation] 'X' handler took Yms

  console.log("Console log record initialized");

}