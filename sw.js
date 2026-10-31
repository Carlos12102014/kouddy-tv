// Service worker minimo: solo existe para que el celular permita "instalar"
// el control como app. No guarda nada en cache (siempre la version publicada).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
