'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "de211cf0d9cd49718fdd642ca3cdbf9e",
"assets/AssetManifest.json": "b53752001c63093ba3a99830026b7dc2",
"assets/assets/images/cartoon.png": "abb0915fb61d98683b55d2cc94d21793",
"assets/assets/images/flutter.jpg": "36f02becd11822ef436ccc8c285f0f4b",
"assets/assets/images/skills_bg.jpg": "eb53270e03474608159c1e32502b26ff",
"assets/assets/logos/c++.png": "36cced392108895e7b11d17d84a089c7",
"assets/assets/logos/c.png": "234068a5106728376166b78904e34e48",
"assets/assets/logos/css.png": "a65b386f6980f512e3757563112668bc",
"assets/assets/logos/dart.png": "3df61f5ecd3da2ef05c80747688014d8",
"assets/assets/logos/ejs.png": "a54d60874c5e95ff71b2d8a7b9207331",
"assets/assets/logos/express.png": "8587dd0647ca82fb4ca0372a93f2e358",
"assets/assets/logos/firebase.png": "38b737cfed13bc49cdf0f47df2c2e00d",
"assets/assets/logos/flutter.png": "207e478bfd8a8c243205adb12bd84a32",
"assets/assets/logos/html.webp": "f7af8b5739893c667c67f1960baa9c4f",
"assets/assets/logos/java.png": "a3eb76f09c745ecd5e7d576923539ed2",
"assets/assets/logos/js.png": "26c8d4a1d6b046edae6e87920056c15b",
"assets/assets/logos/mongoDB.png": "3d40302b0864db8e2210e295152d8543",
"assets/assets/logos/node.png": "9ef41cc56ea35505f8aa5a2de3ec1718",
"assets/assets/logos/perl.png": "c955aac6cfaed081e54f13514ac25447",
"assets/assets/logos/python.png": "2feffbe902f9d8dce5ec024f4e05796f",
"assets/assets/logos/react.png": "c13c2f34cbe52ba6622cbc9a5d36ee51",
"assets/assets/logos/sql.png": "8acf821791a44f150bd707c824e1175c",
"assets/assets/projects/1.png": "75d1cc93423cd19ff9b29aa8cdd01bb7",
"assets/assets/projects/2.png": "89a0744f32d725d96e9008ca67124dbd",
"assets/assets/projects/3.png": "3d029b1e9d0cc8d399b942f8c3693014",
"assets/assets/projects/4.png": "633bb1d35b4a81a4b1fdcad534117405",
"assets/assets/projects/5.png": "6cf165bc8669f6c2d1e770cc7ef327be",
"assets/assets/projects/ballot.png": "58b465490f9d1b899d7a71d3f011ed14",
"assets/assets/projects/vanilai.png": "84ac4969a028220bbe89dda5ec801a36",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "024270f3ed6fa61e1d3bbf9c8c2575bb",
"assets/loading.gif": "f32197f072587bc2bb08a879839fabec",
"assets/loading1.gif": "99870a3f19a64453f6495f605aa72423",
"assets/loading2.gif": "c2ac63b1fb373855bc62006fb12713b3",
"assets/NOTICES": "3ee9eac6e64248623fc0dfe90ff362e3",
"assets/owisz0kg.bmp": "d5052951212cfde605c7e3fb244fba05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "f86cdc0cfb38ed2f504b47cfce9ddf48",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c92f479a521cdee1891edeb7cc6c5747",
"/": "c92f479a521cdee1891edeb7cc6c5747",
"main.dart.js": "392682bfc338865a977c5ad9ad14e05e",
"manifest.json": "35f708e8e13b0ee09d604e60a69c6565",
"version.json": "25302c698c70e83bc4f69c8b68f1282c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
