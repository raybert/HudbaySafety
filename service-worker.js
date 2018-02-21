var cacheName = 'safety-content';
var filesToCache = [
 '/src/my-app.html',
  '/src/my-icons.html',
  '/src/my-view1.html',
  '/src/my-view2.html',
  '/src/my-view3.html',
  '/src/my-view404.html',
  '/src/shared-styles.html',
  '/images/manifest/icon-48x48.png',
  '/images/manifest/icon-72x72.png',
  '/images/manifest/icon-96x96.png',
  '/images/manifest/icon-144x144.png',
  '/images/manifest/icon-192x192.png',
  '/images/manifest/icon-512x512.png',
  '/images/favicon.ico',
  '/index.html',
  '/',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});