'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "99b6e65f37406d1c9feeff227a8477ef",
"version.json": "f2db19ece9153db3b68632c24fd60639",
"index.html": "135bcf2dba52a88a4ac992179dbaacc6",
"/": "135bcf2dba52a88a4ac992179dbaacc6",
"main.dart.js": "52880ee20cbe2fed48b12d9d4fbaa10a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "e57e061b7630880356e1408d179a6ca8",
"icons/Icon-maskable-192.png": "98ada6c2a91bb3d492cb7f142774efbf",
"icons/Icon-432.png": "8dacd4746ee53c8ae8c136062d29305d",
"icons/Icon-216.png": "1398b3ccb39e65fc60ed44a1ffccf93a",
"icons/Icon-maskable-512.png": "9cceacffa3224ff66fdbfc59bd929f86",
"manifest.json": "3a23ff1394fbeb339dadaed423dcd71f",
"assets/AssetManifest.json": "f823205b94593c659ac6508d45762b50",
"assets/NOTICES": "486b156287f164dcbda488df1a9f2d4c",
"assets/FontManifest.json": "1473e316bb9d310fdbce2caeab86240c",
"assets/AssetManifest.bin.json": "4da32d547b4493ffaaf20e2fa7a0d6bb",
"assets/packages/widgetbook/assets/logo.png": "445292cbfde4f60d5b3dca36d0d6dfb2",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/nx_ui/assets/search_icon.svg": "dae6d88eea5d1dfb119dbdecd6fab3c1",
"assets/packages/nx_ui/assets/logout_icon.svg": "8173ae2162eed1a41bd68b3016692f37",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "62dd2ad5a400ff58b6681c42d315ecf3",
"assets/fonts/MaterialIcons-Regular.otf": "ee261d002f490b4f18b73acebdc2490b",
"assets/assets/images/nx_profile-1.PNG": "45f42b1a5f0b1709c1534af4abb1de50",
"assets/assets/images/tagatic_mock.png": "f9ec8e8a5f65b7989f5c6861bc047636",
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
"assets/assets/images/decider_mock.png": "cb32cfaf2d77ed566dd1280349987743",
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
"assets/assets/images/decider_mock_2.png": "70d85739ac84c02e7365c41034dd0b5c",
"assets/assets/images/nx_calendar-2.png": "371173c88ba265f9ac116c282a7480f4",
"assets/assets/images/nx_feedback-3.png": "1cbb52012decac836a683a724f34c419",
"assets/assets/images/nx_sequrify-1.png": "c1159ede48c603132d109263231f6d3e",
"assets/assets/images/nx_ui-3.PNG": "6dd3964ec5ee228f350c0331022757e2",
"assets/assets/images/nx_ui-2.PNG": "e624803729505cd623e301aa9be20800",
"assets/assets/images/nx_feedback-2.png": "6a02fb6fd57023181e201d1a923da554",
"assets/assets/images/nx_calendar-3.png": "1086420866de8e86742d7e29e5422c44",
"assets/assets/images/gallery-2542.png": "2cc45e29729edd577d45fe141ade5419",
"assets/assets/images/nx_auth-4.png": "c8ece67d017df943622696ad5fee128b",
"assets/assets/images/demo_mock_1.png": "1ec1202d300678573a37d2a1c0c61648",
"assets/assets/images/nx_auth-5.png": "cbfbc1103166ac93473115ac45d3c3af",
"assets/assets/images/gallery-2543.png": "4510e7050ad0a68ecc5d13d5967e11e3",
"assets/assets/images/icon_in.svg": "68809a605b338c8d2a086a27b1faf2a9",
"assets/assets/images/gallery-2541.png": "d8a3b03c74598eeadefb8d8641db6b36",
"assets/assets/images/random_time_mock_2.png": "501ed55635247de54ad497517cedfe5e",
"assets/assets/images/demo_mock_3.png": "fbdb53232489a57372e9e6d8d6e61f24",
"assets/assets/images/demo_mock_2.png": "9cc80f00c87ffc38ea816e609c104fa9",
"assets/assets/images/nx_auth-6.png": "ecc0a2da086e8ef786a54c4cd8408b0b",
"assets/assets/images/icon_fb.svg": "eaeb21f58dbe4538c89a6c8ecc14d8ef",
"assets/assets/images/gallery-2540.png": "50ec6415988d626aa45be47a393f4982",
"assets/assets/images/gallery-2544.png": "cd0ced7c8ab4eb9f52f4e5fc08dee639",
"assets/assets/images/nx_auth-2.png": "f21b4c1305cc6ab6757f153179fc028b",
"assets/assets/images/random_time_mock.png": "e9bb5a8c0bc56ff10e17f70520c06c6c",
"assets/assets/images/nx_auth-3.png": "c08d2090f20d50de0a5eee04352158bb",
"assets/assets/images/nx_auth-1.png": "15332ff5ddb40a086874d7c68cacd1be",
"assets/assets/images/demo_mock_4.png": "177db7844960a1a2dd6ed35cf55599e3",
"assets/assets/data/nx_demo_more.json": "a96f8646ead22293e3b04771741d1acc",
"assets/assets/data/nx_components.json": "8ee3930616139fd2476eaa8a5e2af49b",
"assets/assets/data/nx_dashboard.json": "e232b40c0e57f0c1053e1f9c75b7c002",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
