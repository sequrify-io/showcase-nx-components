'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f2db19ece9153db3b68632c24fd60639",
"index.html": "6743f4a1596c7997d74fa635424ccca5",
"/": "6743f4a1596c7997d74fa635424ccca5",
"main.dart.js": "2f2a462e675226d58363747883a7fbc8",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "e57e061b7630880356e1408d179a6ca8",
"icons/Icon-maskable-192.png": "98ada6c2a91bb3d492cb7f142774efbf",
"icons/Icon-432.png": "8dacd4746ee53c8ae8c136062d29305d",
"icons/Icon-216.png": "1398b3ccb39e65fc60ed44a1ffccf93a",
"icons/Icon-maskable-512.png": "9cceacffa3224ff66fdbfc59bd929f86",
"manifest.json": "3a23ff1394fbeb339dadaed423dcd71f",
"assets/AssetManifest.json": "2af6b96326d858913bcdb4b5f92201ba",
"assets/NOTICES": "eb5f6b3b895e1f61e1fceab66d77c9d8",
"assets/FontManifest.json": "19edf42864e94a1e6c21f637e64974be",
"assets/AssetManifest.bin.json": "e58b4602fb0ef7491e246a616d5c4cc0",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/nx_ui/assets/search_icon.svg": "dae6d88eea5d1dfb119dbdecd6fab3c1",
"assets/packages/nx_ui/assets/logout_icon.svg": "8173ae2162eed1a41bd68b3016692f37",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0d8467dc053464e2b8a6be105a57fb3e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/nx_profile-1.PNG": "45f42b1a5f0b1709c1534af4abb1de50",
"assets/assets/images/nx_profile-2.PNG": "05abdf72e904b1fe6387c379bc46b554",
"assets/assets/images/nx_profile-3.PNG": "9f5dceb0b6cceb7101d4022a344a543b",
"assets/assets/images/nx_profile-4.PNG": "44530e7c42d060d63f47d8c1c226b647",
"assets/assets/images/gallery-25404.png": "80430736a0ebc7993d4d59c486bd3bfb",
"assets/assets/images/nx_payments-1.png": "724734420373728bfa428382e528d8ce",
"assets/assets/images/nx_payments-2.png": "68509dddd400f45a3c3101c87ba8b22d",
"assets/assets/images/favicon-icon.svg": "a65554eaf10d75df2ec457e256135cb3",
"assets/assets/images/nx_payments-3.png": "46fc40e946d769a4899cf1e4d9c1dc9a",
"assets/assets/images/gallery-2539.png": "c52b317f7627a60847ad7b2c9f3937a7",
"assets/assets/images/gallery-2538.png": "bf5d0c9518d0ff77f04a1fe8cf716eb8",
"assets/assets/images/nx_calendar-7.png": "141ad8447b822ee20a85633c31c79b98",
"assets/assets/images/nx_sequrify-4.png": "79b486a37361d7e202d6179d70d0ad4d",
"assets/assets/images/nx_biometry-2.png": "46fcacc49c1e019f848d50342c843254",
"assets/assets/images/nx_biometry-3.png": "1734175bda99b56fd36ebc0a6e1ea222",
"assets/assets/images/nx_sequrify-5.png": "e67039267130cee9544b57bdce053047",
"assets/assets/images/nx_calendar-6.png": "8ee4dc0e8592ab210e97ee9bce918f5d",
"assets/assets/images/nx_calendar-4.png": "0d6ec42a1964a015254e64211d39e54a",
"assets/assets/images/nx_biometry-1.png": "992e45611537ff7725c0da76c9c58bee",
"assets/assets/images/nx_ui-4.PNG": "dbce2bd732e639524b0fecfd931a5925",
"assets/assets/images/nx_sequrify-6.png": "4487aa2794a54b1c6651f6e2a72f7def",
"assets/assets/images/gallery-2537.png": "14721060b97e6314b7310543cd271d00",
"assets/assets/images/nx_calendar-5.png": "6307b8ab8f83ea6c6c5fbc33bfb06052",
"assets/assets/images/nx_calendar-1.png": "8d77748dd96da92ae93bde41fd518a22",
"assets/assets/images/nx_sequrify-2.png": "4cac12de5e0c1bc2fa8b690e393c11ce",
"assets/assets/images/favicon-logo.png": "e57e061b7630880356e1408d179a6ca8",
"assets/assets/images/nx_ui-1.PNG": "7bd30ce799db7e410c4a38eabea72350",
"assets/assets/images/linkedin.png": "31016cc6dbbeacb2b8e712f834243ec8",
"assets/assets/images/nx_sequrify-3.png": "d24cdf69aecb5900be509d2a21e2a9c4",
"assets/assets/images/nx_feedback-1.png": "72c999b57524b64f5bcf86d0fffd5aec",
"assets/assets/images/nx_calendar-2.png": "371173c88ba265f9ac116c282a7480f4",
"assets/assets/images/nx_feedback-3.png": "1cbb52012decac836a683a724f34c419",
"assets/assets/images/nx_sequrify-1.png": "c1159ede48c603132d109263231f6d3e",
"assets/assets/images/nx_ui-3.PNG": "6dd3964ec5ee228f350c0331022757e2",
"assets/assets/images/nx_ui-2.PNG": "e624803729505cd623e301aa9be20800",
"assets/assets/images/nx_feedback-2.png": "6a02fb6fd57023181e201d1a923da554",
"assets/assets/images/nx_calendar-3.png": "1086420866de8e86742d7e29e5422c44",
"assets/assets/images/gallery-2542.png": "2cc45e29729edd577d45fe141ade5419",
"assets/assets/images/nx_auth-4.png": "c8ece67d017df943622696ad5fee128b",
"assets/assets/images/gallery-2543.png": "4510e7050ad0a68ecc5d13d5967e11e3",
"assets/assets/images/icon_in.svg": "68809a605b338c8d2a086a27b1faf2a9",
"assets/assets/images/gallery-2541.png": "d8a3b03c74598eeadefb8d8641db6b36",
"assets/assets/images/nx_auth-6.png": "ecc0a2da086e8ef786a54c4cd8408b0b",
"assets/assets/images/icon_fb.svg": "eaeb21f58dbe4538c89a6c8ecc14d8ef",
"assets/assets/images/gallery-2540.png": "50ec6415988d626aa45be47a393f4982",
"assets/assets/images/gallery-2544.png": "cd0ced7c8ab4eb9f52f4e5fc08dee639",
"assets/assets/images/nx_auth-2.png": "f21b4c1305cc6ab6757f153179fc028b",
"assets/assets/images/nx_auth-3.png": "c08d2090f20d50de0a5eee04352158bb",
"assets/assets/images/nx_auth-1.png": "15332ff5ddb40a086874d7c68cacd1be",
"assets/assets/data/nx_components.json": "8ee3930616139fd2476eaa8a5e2af49b",
"assets/assets/data/nx_dashboard.json": "e232b40c0e57f0c1053e1f9c75b7c002",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
