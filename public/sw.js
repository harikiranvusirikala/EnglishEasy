// EnglishEasy service worker (hand-written; BUILD_PLAN Step 17). Change VERSION to throw away every old cache.
// Any change to this file makes browsers install the new worker; the app then shows "Updated — tap to reload".
importScripts("/sw-routes.js");

var VERSION = "1";
var PAGES = "ee-pages-" + VERSION;
var STATIC = "ee-static-" + VERSION;
var CONTENT = "ee-content-" + VERSION;
var NAVIGATION_WAIT = 4000; // on a slow connection, a page already kept is shown after this long

var routes = self.swRoutes;

self.addEventListener("install", function (event) {
  event.waitUntil(precache().then(function () {
    // A first install has nothing to replace, so it starts at once; an update waits for the learner's tap.
    if (!self.registration.active) return self.skipWaiting();
  }));
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (names) {
        return Promise.all(
          names
            .filter(function (name) { return name.indexOf("ee-") === 0 && [PAGES, STATIC, CONTENT].indexOf(name) < 0; })
            .map(function (name) { return caches.delete(name); }),
        );
      })
      .then(function () { return self.clients.claim(); }),
  );
});

self.addEventListener("message", function (event) {
  var data = event.data || {};
  if (data.type === "SKIP_WAITING") self.skipWaiting();
  if (data.type === "CACHE_URLS" && Array.isArray(data.urls)) {
    event.waitUntil(
      caches.open(CONTENT).then(function (cache) {
        return Promise.all(
          data.urls.map(function (url) {
            return fetch(url).then(function (response) { if (response.ok) return cache.put(url, response); }).catch(function () {});
          }),
        );
      }),
    );
  }
});

self.addEventListener("fetch", function (event) {
  var request = event.request;
  var strategy = routes.strategyFor(request, self.location.origin);
  if (strategy === "ignore") return;
  if (strategy === "cache-first") event.respondWith(cacheFirst(request));
  else if (strategy === "stale-while-revalidate") event.respondWith(staleWhileRevalidate(request));
  else event.respondWith(networkFirst(request));
});

/** The app shell: each page, then the scripts and styles it uses. A file that fails to load is skipped. */
function precache() {
  return Promise.all([caches.open(PAGES), caches.open(STATIC)]).then(function (open) {
    var pages = open[0];
    var statics = open[1];
    var texts = routes.SHELL.map(function (path) {
      return fetch(path, { cache: "reload" })
        .then(function (response) {
          if (!response.ok) return "";
          return response.clone().text().then(function (text) {
            return pages.put(routes.pageKey(path, self.location.origin), response).then(function () { return text; });
          });
        })
        .catch(function () { return ""; });
    });
    return Promise.all(texts)
      .then(function (list) { return addAssets(statics, routes.assetsIn(list.join("\n"))); })
      .then(function (styles) {
        // Fonts and images that the stylesheets point to.
        return Promise.all(styles.map(function (css) { return addAssets(statics, routes.assetsIn(css)); }));
      });
  });
}

/** Stores each file; returns the text of the stylesheets among them. */
function addAssets(cache, urls) {
  return Promise.all(
    urls.map(function (url) {
      return cache
        .match(url)
        .then(function (found) { return found || fetch(url).then(function (response) { if (response.ok) return cache.put(url, response.clone()).then(function () { return response; }); }); })
        .then(function (response) { return response && /\.css(\?|$)/.test(url) ? response.clone().text() : ""; })
        .catch(function () { return ""; });
    }),
  ).then(function (texts) { return texts.filter(Boolean); });
}

function cacheFirst(request) {
  return caches.open(STATIC).then(function (cache) {
    return cache.match(request).then(function (found) {
      if (found) return found;
      return fetch(request).then(function (response) {
        if (response.ok) cache.put(request, response.clone());
        return response;
      });
    });
  });
}

function staleWhileRevalidate(request) {
  return caches.open(CONTENT).then(function (cache) {
    return cache.match(request).then(function (found) {
      var refresh = fetch(request)
        .then(function (response) {
          if (response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(function () { return found; });
      if (found) return found; // the latest copy arrives in the background, for the next visit
      return refresh.then(function (response) { return response || Response.error(); });
    });
  });
}

function networkFirst(request) {
  var key = routes.pageKey(request.url, self.location.origin);
  return caches.open(PAGES).then(function (cache) {
    return cache.match(key).then(function (found) {
      var fetched = fetch(request).then(function (response) {
        if (response.ok && !response.redirected) cache.put(key, response.clone());
        return response;
      });
      var slow = found
        ? new Promise(function (resolve) { setTimeout(function () { resolve(found); }, NAVIGATION_WAIT); })
        : null;
      var attempt = slow ? Promise.race([fetched, slow]) : fetched;
      return attempt.catch(function () {
        return found || cache.match(routes.pageKey("/offline", self.location.origin)).then(function (page) { return page || Response.error(); });
      });
    });
  });
}
