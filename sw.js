const CACHE_NAME = 'familia-gl-v5-cache';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './modulos/calendario_coparentalidad.html',
  './modulos/rutinas_sueno.html',
  './modulos/escolaridad_ropa_regalos.html',
  './modulos/panoramas_ninos.html',
  './modulos/pareja_bienestar_capsula.html',
  './modulos/album_hitos.html',
  './modulos/finanzas_hogar.html',
  './modulos/gestion_hogar.html',
  './modulos/documentos_auto.html',
  './modulos/salud_menu_emergencia.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone)).catch(() => {});
        return resp;
      }).catch(() => cached);
    })
  );
});
