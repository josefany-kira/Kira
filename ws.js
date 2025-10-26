// Service Worker para manter câmera ativa em background
const CACHE_NAME = 'camera-monitor-v1';

self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'KEEP_ALIVE') {
    // Manter service worker vivo
    setInterval(() => {
      event.ports[0].postMessage({ type: 'KEEP_ALIVE_RESPONSE' });
    }, 10000);
  }
});
