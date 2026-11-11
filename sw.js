const CACHE_NAME = 'motor-trip-static-v4';
const PRIVATE_PATHS = ['/auth/', '/rest/', '/functions/', '/storage/'];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || PRIVATE_PATHS.some(path => url.pathname.includes(path))) return;
  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response.ok && (url.pathname === '/' || url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css') || url.pathname.endsWith('.svg'))) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch {
      return (await caches.match(request)) || (request.mode === 'navigate' ? caches.match('./') : Response.error());
    }
  })());
});
