'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ed8889f45f30062da129864828620782",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7e737f0ddc158a61a45c41d3b5d4a5dd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20f9a86572b8842562737bd2f5011a77",
".git/logs/refs/heads/main": "85cfd7a1339bf3070ffde426f329b050",
".git/logs/refs/remotes/origin/main": "9adb7f0370101a9c25a4bc71fcf9cb75",
".git/objects/16/c6075d80e25f55c96355668afac4ecd2f21706": "9aac75b969bc11c4eeb74b046aaa22c5",
".git/objects/19/62186707946a9d9c9f0a376d0f8b009e073f21": "f37ce35af7896646b1e0441b6483d6c4",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/7ca8cbb84e122d3adedfa1a3dc6a349d8e4dd9": "f438d37584c019cb2edebca7a78f0c05",
".git/objects/20/68f09ac4449893039d12bd6c7e4ef43f4f52f6": "b1d252601e523ed648405ee29af6d42b",
".git/objects/23/195681a3c05185fee1ad0a5962ed2021dc8d5c": "5b7cf39ddf24b316c40f61aa8e390795",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/ba9295cdb3a518942ed1b00203c534068e6a6e": "ab481fd1196b870556921fd06fd48825",
".git/objects/34/b3ebf42a64a4eb776078e6d23f67b4b6e604c2": "cd154ddfdce52e82c14c8fe3853b695e",
".git/objects/38/83c59d74d598a2d37659fcfb21993c34f5eb1c": "fd00958112f08e0f6edd6d3a501f210d",
".git/objects/4c/03a6f0e0c59d5d97e5056b923e84b4d2ffd4f4": "3f57850a06e3935b215656a048808991",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/19a0f15c3e24c7c81624c01179de327b0c57cd": "9e13de78f3249a80dc87ead41f9baf4c",
".git/objects/51/0994dc809a151e9e4b8f195cf86f9c8b8835ff": "42718a38d70078684fc37053f38795c9",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/59/19abaf5d5e173904cf9ffa6516c51dfd1a5c33": "c808c80fe103e0222a12d26a48c99641",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/9b3c24a921708fc1515fec21f5309d3f70f846": "0e314dfe735a456f4311a8fe67a44b0d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/5696750ea9f9fbefa86c282ce2b66f74a981af": "debb5249b5cec6254f1bce1f754a68cf",
".git/objects/73/9ecd7e8c1790c991470167f8c02f81247c3492": "2d5024ddfc06cd2ad5c984ef66a8ba90",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/0c38ef27fc83e4533ff6a7b2b707509abb6c48": "20f7ce45b87e12c25df23683d47ae2e8",
".git/objects/76/acd23092421462916ece1416f5fe5a8c9a194e": "b1bab393ee0a57123f56e61dd5bf2a1d",
".git/objects/79/f74073de33204cff3f4dbed7d0fb37b5518723": "a72709036e2193d7b8f3b6636148dadc",
".git/objects/7d/56b0fb44182f71b9ba7780ac17de94cc679a84": "0a4a2f282f922b646b412ad52855f956",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/9cdff90b9e4c4239319e99a7d1064957fa524d": "a4239bae10712c4397f25d695289c404",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/e92c6daa4ef72df8d9279bd9b21789cd9836c2": "b54b0dd57ce14e412d45a9d1629a5afc",
".git/objects/93/3c7804ef587263087fb0e7272a4fcc998fa06c": "51c8d95cdee4ce7750a59e1ccb50f057",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a0/bd813e57ef6e528c6c8e8b416d53149866ef72": "1443365aa0802e7b64bd2d957b3e9e7a",
".git/objects/a1/6a353334b19cb87535b11bd930bcbc69263a50": "3a2212ff32a97d1a126e3fae8baeca20",
".git/objects/a3/b82a77f6d6e6885b3dc39f41146357eb20c232": "3a19d0918161c4315cfa9a6528fcfa64",
".git/objects/a4/b39db88b775923710e9776e55ab34a948cb0ce": "6801bf3d428e70196e54a3890533ea40",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/8678d58365e26d975917e9e1602a8a03617aaf": "54bd6d7b22e7b4fc8bb29f2a77a47f7a",
".git/objects/c5/8d96da9c85ece99ccabfd29e1e010a8d55e5f9": "ee5bc488e3ebe4a8e4b7ff15a4dfb421",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/57fd188dbc10a2a74cd31f9982e1cfcc0c4a28": "59b74fe22053e5352560b881bdae5bb6",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/292da8199eebc27eb263afbc6794f16bb57bb9": "5c0c514505e46d9855f9db2bdc20220b",
".git/objects/dd/940219a5948c7801462413f6c68dfc5fbb0814": "75e5e676e0b2bcd60e89f2fe6867840d",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c0da10bcaaa4dcd018c4965f9b73f12ded9970": "8278912fd98491442704bec962bbd963",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/2bf9cdd8ba02b80db9b8ed765664fa5e919570": "b02e321c1b35ee9eb3c4b51dbc0a870a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/877cab00b6e5000cbc11307c1f0ad1bedc3f42": "40f1b4e5d8be1e6ead63a3c56236c221",
".git/refs/heads/main": "de60353d2f6bb2ddd72cd2bbd5d37cad",
".git/refs/remotes/origin/main": "de60353d2f6bb2ddd72cd2bbd5d37cad",
"assets/AssetManifest.bin": "cf3069cab2c8d5e051b72c8608a30afd",
"assets/AssetManifest.bin.json": "eefc52456d0b9e86c66cb19e20492c93",
"assets/AssetManifest.json": "87039ee586d14eab8e28939676475ab7",
"assets/assets/images/logo_icone_tokio.png": "3379d6c276d9e22c502db8b187a5d167",
"assets/assets/images/logo_tokio_branco_transp.png": "6a6a5271cbf19cf62c80c44ce5b9f5a9",
"assets/assets/images/marina-foto.png": "f69b0b2a2a673a77c123bc74b79502ca",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a27745151e72d081f9be26b68482ec97",
"assets/NOTICES": "e7e84d6152ae7a4ba739f465eaff8cbe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8bfe3262ab644de77a56c2b4cc29e741",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "43392d584217583a929735ec35c14f8e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"desktop.ini": "15478b340a8362bb79fd2a6ea0dde1a0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-config.js": "068787f18ccb521a75ce8fcbe55b188c",
"firebase-config.template.js": "01f3b693bd3e1252785e0f0ef8943b0e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ce5c14dfee612031eca8bb5ad5a2ea2a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6cb3a6d23f4f3d7c0488e69e931e6ab9",
"/": "6cb3a6d23f4f3d7c0488e69e931e6ab9",
"main.dart.js": "6bff908a8b745ee132d91408f07c3f1b",
"manifest.json": "543dd03c86e36ec5cd5b0bfa9ed84c87",
"version.json": "91b793e373ec3c0717de0a81915a6f51"};
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
