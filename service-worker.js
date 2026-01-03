self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("azkar-cache").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js"
      ])
    )
  );
});
