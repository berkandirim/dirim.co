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
    "url": "/_nuxt/app.01e06d836b9f4dda7659.js",
    "revision": "bba79231c46734528d85fce63f714ed8"
  },
  {
    "url": "/_nuxt/common.91c5fd5b4ca8a2565e89.js",
    "revision": "225c4b5e2b991a287ef824740911c5f8"
  },
  {
    "url": "/_nuxt/layouts/default.0033bd2d0035e0aa9af9.js",
    "revision": "380fa4d2513f5fc4e2c7e120c5d686b1"
  },
  {
    "url": "/_nuxt/manifest.d6599e36f4df4f6e50e8.js",
    "revision": "ece4aad49ca7b275aaf82f907941d049"
  },
  {
    "url": "/_nuxt/pages/index.fed6048326ff6a1b864b.js",
    "revision": "0b22611345db92e8b06f6299619ab8f4"
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
