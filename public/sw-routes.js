// The service worker's routing decisions, as pure functions (no caches, no fetch), so unit tests can run them.
// Loaded by sw.js with importScripts; tests load it with require.
(function (root) {
  /** The pages that make the app work offline; fetched when the worker installs. */
  var SHELL = ["/learn", "/learn/play", "/learn/journey", "/learn/practice", "/learn/settings", "/offline"];

  /**
   * What to do with a request: "ignore" (the browser handles it), "network-first" (pages),
   * "stale-while-revalidate" (lesson files: answer from the cache now, refresh it in the background),
   * or "cache-first" (files whose address changes when they do).
   */
  function strategyFor(request, origin) {
    var url = new URL(request.url);
    if (request.method !== "GET" || url.origin !== origin) return "ignore";
    var path = url.pathname;
    if (path === "/sw.js" || path === "/sw-routes.js" || path.indexOf("/api/") === 0 || path.indexOf("/dev/") === 0) return "ignore";
    if (path.indexOf("/content/") === 0 && /\.json$/.test(path)) return "stale-while-revalidate";
    if (path === "/audio/manifest.json") return "stale-while-revalidate";
    if (path.indexOf("/_next/static/") === 0 || path.indexOf("/icons/") === 0) return "cache-first";
    if (path.indexOf("/audio/") === 0 && /\.mp3$/.test(path)) return "cache-first"; // a clip's name changes with its text
    if (request.mode === "navigate") return "network-first";
    return "ignore"; // includes Next's own page-data requests (?_rsc=): if they fail, Next reloads the page, which is a navigation
  }

  /** Every page is the same whatever its query (/learn/play?l=day-1), so a page is kept under its path alone. */
  function pageKey(href, origin) {
    var url = new URL(href, origin);
    return url.origin + url.pathname;
  }

  /** The /_next/static files a page's HTML (or a stylesheet) mentions. */
  function assetsIn(text) {
    var found = {};
    var pattern = /\/_next\/static\/[^"'\\\s)<>]+/g;
    var match;
    while ((match = pattern.exec(text))) found[match[0]] = true;
    return Object.keys(found);
  }

  var api = { SHELL: SHELL, strategyFor: strategyFor, pageKey: pageKey, assetsIn: assetsIn };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.swRoutes = api;
})(typeof self !== "undefined" ? self : globalThis);
