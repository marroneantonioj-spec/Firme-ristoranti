const CACHE_NAME = 'firme-pasti-v1';
const ASSETS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});


---

### Cosa fare ora:
1. Aggiorna **`index.html`** su GitHub copiando il nuovo codice qui a destra (senza eventuali marcatori ` 
```html ` all'inizio o alla fine).
2. Crea su GitHub i due nuovi file **`manifest.json`** e **`sw.js`** incollando i rispettivi codici qui sopra.
3. Attendi **1 minuto** che GitHub Pages si aggiorni, torna su **PWABuilder** e clicca su **Re-test** (o reinserisci il link): vedrai scomparire l'avviso rosso e potrai cliccare su **Package for stores** > **Android** per scaricare il tuo **APK**!
