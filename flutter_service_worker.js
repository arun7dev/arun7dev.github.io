'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1f84179c3310c328221db5fb1913c462",
"version.json": "25302c698c70e83bc4f69c8b68f1282c",
"index.html": "7eb5830b49cd530545044bcd7f16bd5e",
"/": "7eb5830b49cd530545044bcd7f16bd5e",
"main.dart.js": "caf919f7ac3b5024d5c932270e0e17c0",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "f8c4ad25998bae2b9c05484ce251797a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6473d5b758e9734d5844492f384e2faf",
"assets/owisz0kg.bmp": "d5052951212cfde605c7e3fb244fba05",
"assets/loading.gif": "f32197f072587bc2bb08a879839fabec",
"assets/NOTICES": "51937c16043817831d07753e2763af76",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "422f2773f70da4ad09f72ecc7f6efb50",
"assets/loading2.gif": "c2ac63b1fb373855bc62006fb12713b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/loading1.gif": "99870a3f19a64453f6495f605aa72423",
"assets/AssetManifest.bin": "f6bdbe1eba63c254c326b76f9b131394",
"assets/fonts/MaterialIcons-Regular.otf": "533db42c32d933d73819a7702c7869bb",
"assets/assets/images/flutter.jpg": "36f02becd11822ef436ccc8c285f0f4b",
"assets/assets/images/shop_app.png": "5ba74b63456fb3e2bdef92b6909940e3",
"assets/assets/images/kavery_app.png": "7a748715e51db700408f6fb3dc8a8203",
"assets/assets/images/ballot_app.png": "af76288fc2d539a8a29d910476017db0",
"assets/assets/images/cartoon.png": "abb0915fb61d98683b55d2cc94d21793",
"assets/assets/images/howdy_chats_app.png": "115cb424d9db93a891f000b8c2ae4293",
"assets/assets/images/vfx_food_app.png": "a3887c038e4e7bb24cd8b57f0a9dd7ba",
"assets/assets/images/skills_bg.jpg": "eb53270e03474608159c1e32502b26ff",
"assets/assets/images/tnphr_app.png": "5f2657934101b59736e3327b63b4be88",
"assets/assets/images/timesmed_app.png": "34811dd4ad6b57617b84608145e80140",
"assets/assets/projects/ballot.png": "58b465490f9d1b899d7a71d3f011ed14",
"assets/assets/projects/4.png": "633bb1d35b4a81a4b1fdcad534117405",
"assets/assets/projects/5.png": "6cf165bc8669f6c2d1e770cc7ef327be",
"assets/assets/projects/2.png": "89a0744f32d725d96e9008ca67124dbd",
"assets/assets/projects/3.png": "3d029b1e9d0cc8d399b942f8c3693014",
"assets/assets/projects/1.png": "75d1cc93423cd19ff9b29aa8cdd01bb7",
"assets/assets/projects/vanilai.png": "84ac4969a028220bbe89dda5ec801a36",
"assets/assets/logos/html.webp": "f7af8b5739893c667c67f1960baa9c4f",
"assets/assets/logos/python.png": "2feffbe902f9d8dce5ec024f4e05796f",
"assets/assets/logos/flutter.png": "207e478bfd8a8c243205adb12bd84a32",
"assets/assets/logos/perl.png": "c955aac6cfaed081e54f13514ac25447",
"assets/assets/logos/sql.png": "8acf821791a44f150bd707c824e1175c",
"assets/assets/logos/firebase.png": "38b737cfed13bc49cdf0f47df2c2e00d",
"assets/assets/logos/java.png": "a3eb76f09c745ecd5e7d576923539ed2",
"assets/assets/logos/express.png": "8587dd0647ca82fb4ca0372a93f2e358",
"assets/assets/logos/js.png": "26c8d4a1d6b046edae6e87920056c15b",
"assets/assets/logos/node.png": "9ef41cc56ea35505f8aa5a2de3ec1718",
"assets/assets/logos/react.png": "c13c2f34cbe52ba6622cbc9a5d36ee51",
"assets/assets/logos/c++.png": "36cced392108895e7b11d17d84a089c7",
"assets/assets/logos/c.png": "234068a5106728376166b78904e34e48",
"assets/assets/logos/css.png": "a65b386f6980f512e3757563112668bc",
"assets/assets/logos/ejs.png": "a54d60874c5e95ff71b2d8a7b9207331",
"assets/assets/logos/dart.png": "3df61f5ecd3da2ef05c80747688014d8",
"assets/assets/logos/mongoDB.png": "3d40302b0864db8e2210e295152d8543",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
