importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "dirim",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.9f186c682d99df9cc007.js",
    "revision": "32c88bd7562ef8d9abc3a496a1389b03"
  },
  {
    "url": "/_nuxt/layouts/default.cf5d9197c139fef988ae.js",
    "revision": "8ea94526a613d4367a5836c4a402ce45"
  },
  {
    "url": "/_nuxt/manifest.a4d416523a5fcb702998.js",
    "revision": "d5fb6f6366e234f9a7c05c6fe8d83504"
  },
  {
    "url": "/_nuxt/pages/index.e3b343e0f87b1f28e5e9.js",
    "revision": "c1b9a7a3fafb12b354d603ed562ffa38"
  },
  {
    "url": "/_nuxt/vendor.6a922e90b2ae71f60586.js",
    "revision": "fd783e6b0e50b454e25b1c6eabe5dbce"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

