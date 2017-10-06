importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.1eb4e69697e0ae9e7f0b.js",
    "revision": "524470ea7884dabed6d24721a19fb891"
  },
  {
    "url": "/_nuxt/common.d6acb689a1ec7604213a.js",
    "revision": "084a7d498543fe73e1408ac33e0159fb"
  },
  {
    "url": "/_nuxt/layouts/default.796e117298a529451122.js",
    "revision": "d0866dcabcd395478bad4e7b2f32d567"
  },
  {
    "url": "/_nuxt/manifest.fdbab1a4bb1d91489a8a.js",
    "revision": "b452a17f273721bcb374f6eed8291de4"
  },
  {
    "url": "/_nuxt/pages/index.9d0f2f01d19adc9e2bb7.js",
    "revision": "ee672805196e11b011771fb671b573cd"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "dirim_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
