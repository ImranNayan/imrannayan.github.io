var cacheName = 'hello-pwa';
var filesToCache = [
  // '/',
  // '/index.html',
  // '/css/main.css',
  // '/js/main.js'
];

/* For online cache */
self.addEventListener('install', e => {
  e.waitUntil( caches.open(cacheName).then( r => {
      return r.addAll(filesToCache) }) )
  self.skipWaiting()
})

/* For offline cache */
self.addEventListener('fetch', e => {
  e.respondWith( caches.match(e.request).then( r => {
      return r || fetch(e.request) }) )
})
