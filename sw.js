/* TecGo · ENERGÉTICOS — cache aislada por aplicación y versión
   Solo almacena recursos del alcance de TecGo, sin datos ni otros repositorios. */
const PREFIX = 'tecgo-energeticos-v';
const CACHE = PREFIX + '4';
const FILES = ['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./assets/logo.png','./assets/ingeniero.jpg'];
const SCOPE = new URL(self.registration.scope);
function ownRequest(req) {
 const u = new URL(req.url);
 return req.method === 'GET' && u.origin === SCOPE.origin && u.pathname.startsWith(SCOPE.pathname) && !u.search &&
  !u.pathname.includes('/api/') && req.credentials !== 'include';
}
self.addEventListener('install', event => {
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
 event.waitUntil(caches.keys().then(keys=>
  Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))
 ).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
 if (!ownRequest(event.request)) return;
 event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{
  if(response.ok&&response.type==='basic'){
   const copy=response.clone();
   event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)).catch(()=>{}));
  }
  return response;
 }).catch(()=>caches.open(CACHE).then(cache=>cache.match(event.request)).then(hit=>hit||Response.error())));
});
