self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('fxcalc-v1')
            .then(cache => cache.addAll([
                './',
                './index.html',
                './app.js',
                './icon512.png',
                './maskable-icon512.png',
                './icon192.png',
                './icon16.png',
                './fixer.json',
                './manifest.webmanifest'
            ]))
    );
});