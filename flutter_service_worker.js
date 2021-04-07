'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "598cb1b7c1326d05b8b6e541bc84dd38",
"index.html": "6671785364ea93b920a8591730b342a3",
"/": "6671785364ea93b920a8591730b342a3",
"main.dart.js": "d47a30e65b4142743959a843dbc2deec",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "544183f40dbcc29d5b0849ce2411a0c7",
"assets/config/app_config_dev.json": "1bce84f608e9a81f31ab39dd0f30dcb6",
"assets/config/app_config_prod.json": "c34773cb796cfad86c5a0cc24defcf2a",
"assets/AssetManifest.json": "0328eeda0a49627517572683dd4f367f",
"assets/NOTICES": "e9acc6629c0afaaec0c8a0422193636e",
"assets/FontManifest.json": "77b59603a16de8fb6c5358598c1fe012",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/awesome_card/images/contactless_icon.png": "a092b99c8a1f820436ddf6e540eb632d",
"assets/packages/awesome_card/images/card_provider/discover.png": "50f59532bededb551c5ed62fb1009e69",
"assets/packages/awesome_card/images/card_provider/rupay.png": "3e3018d92a1b51fde09382939664a22d",
"assets/packages/awesome_card/images/card_provider/maestro.png": "6800b310fc27f91d0231ab6556284c5b",
"assets/packages/awesome_card/images/card_provider/visa.png": "b6cf8805abcc16ca2bc2ed401958cce1",
"assets/packages/awesome_card/images/card_provider/diners_club.png": "4288121f0ec6619f2ea56bc7cbb2685a",
"assets/packages/awesome_card/images/card_provider/master_card.png": "6ecc2a7c3b3d7e1c30ac7cf7a083d5af",
"assets/packages/awesome_card/images/card_provider/jcb.png": "434316972590e7d17d65cd133c018f82",
"assets/packages/awesome_card/images/card_provider/american_express.png": "25d34d555cc835f008806163bf889bf9",
"assets/packages/awesome_card/fonts/MavenPro-Regular.ttf": "ebc7385f9f207b4ad5d0cc4204bf4068",
"assets/packages/awesome_card/fonts/MavenPro-Medium.ttf": "06dcc8cf4f85c46c6985b69ed0b6b5b6",
"assets/packages/awesome_card/fonts/MavenPro-Bold.ttf": "c3c32db501249a4a864e3359d88469fb",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/data/menu_opts.json": "8343da5c74b1dddd8b4730a3187b8564",
"assets/assets/web/GooglePlay.png": "e67e554ad96012b8774fc5bb31259c36",
"assets/assets/web/apps.png": "19783cec164ed239b7c249497965352c",
"assets/assets/web/Hamburguesa_225.png": "175e64d3d870310bedff004cec049f0c",
"assets/assets/web/AppStore.png": "1b6ca02a7047fdc24f14e475467ad83d",
"assets/assets/web/Hamburguesa_150.png": "cd9bbcb4e95d8ea0a9ceec34df405c3d",
"assets/assets/web/Logo.png": "1ed2bc451bff13437fd645931cccf137",
"assets/assets/web/Hamburguesa_300.png": "5093d9a69919a097c91fec29a48cc6ce",
"assets/assets/web/Reserva.png": "fc5e663e9ffc31a6cb81daf185894be0",
"assets/assets/loading.gif": "0ce11ec2b046417cb0390f32bd35d54d",
"assets/assets/logo/logo.png": "3b6ef0d1de683af07afc840977f1fab4",
"assets/assets/logo/LogoHor.png": "5a064c988a280f749a3fe1df3ab4b05b",
"assets/assets/ilustraciones/Carta.png": "96438375a20de1dd69b32aef7ca55cc2",
"assets/assets/ilustraciones/Error@2x.png": "417daec19cacc18472b643537c19f305",
"assets/assets/ilustraciones/Closed.png": "d707c64802ee531452d7585a69f2c87d",
"assets/assets/ilustraciones/registro.png": "ef0c909ea30f3173ba19b6c93097f7ed",
"assets/assets/ilustraciones/ubicacion.png": "93a6374dfbe9b672190d09ff5f1eab09",
"assets/assets/ilustraciones/Hola.png": "d9b0abe3f39da91a13a70d6451d3f59d",
"assets/assets/ilustraciones/OB4.png": "9827833ef4ed59b263d59854c6742371",
"assets/assets/ilustraciones/Reserva@4x-8.png": "ba7e45b1d4533ac2528cc1c478da2efd",
"assets/assets/ilustraciones/OB1.png": "91f762ad228156e23ed1a6ed1ff9b57e",
"assets/assets/ilustraciones/lorecoges.png": "6a54474ed76f0f8f1823cb3a31b262c6",
"assets/assets/ilustraciones/OB2.png": "770e5c3620dfcee79a4d89ee64d1f6e0",
"assets/assets/ilustraciones/ubicacion2.png": "2cbac25ad7de1558180afd7044d47e30",
"assets/assets/ilustraciones/OB3.png": "2954fbb763307ed21e213feeb7b4d082",
"assets/assets/ilustraciones/Reserva.png": "a6ecad4bb005d19b3046496cf5c8fffd",
"assets/assets/ilustraciones/teloenviamos.png": "484d3b6241a313d15a3785dd3cf064f2",
"assets/assets/ilustraciones/Sinpedidos.png": "0ebfe55176bd4e46235d21713be5e685",
"assets/assets/icons/Menus@3x.png": "96e1d608fa9dfcfba3ee9915ac5e9845",
"assets/assets/icons/FlechaDer@3x.png": "346acd2b5e342a80ea3ce7213ca77ad9",
"assets/assets/icons/Carta.png": "bd0c5e1ac10b5b68457f2043c66c8100",
"assets/assets/icons/Promociones.png": "5451b8e01d070148721a7d02b40023e1",
"assets/assets/icons/Contacto@3x.png": "698424ba388a4b5db75b45eefc9d96a7",
"assets/assets/icons/Cerrarsesion@3x.png": "ef07589c22d66b778792b73f5aec0842",
"assets/assets/icons/discount.png": "6faf18b4bfc639b4b672caa168587362",
"assets/assets/icons/Gpay@2x.png": "a9b47a34b20929b6db5690f3e4a8d356",
"assets/assets/icons/Resta@3x.png": "3d8ae67d836fdd5ef65690cf0f98282f",
"assets/assets/icons/barman.png": "a9a7947dbc10d4f393fd8e9056ab4bea",
"assets/assets/icons/Inicio@3x.png": "561395e61cf0baa49340036ee109dbaa",
"assets/assets/icons/Preguntas@3x.png": "1f956c38e5544ad72feeb6add984d942",
"assets/assets/icons/Editar@3x.png": "f5e541e742c0ad981f450348045dd363",
"assets/assets/icons/ApplePay@2x.png": "1a33224b0daef7c3f8ad73703407dfda",
"assets/assets/icons/googlepay.png": "adb7af460964eb129aba4884db790f30",
"assets/assets/icons/restaurant.png": "3618a97024785cf9e0c6346df6a8e214",
"assets/assets/icons/Perfil@3x.png": "1cd9bf1b1def7d3b7385b3a72b7b238c",
"assets/assets/icons/Suma@3x.png": "2906100fc8da38b38c8f86a8f79bbe0f",
"assets/assets/icons/take-away.png": "980a432861432b9ea66a8e8ce7e1d31e",
"assets/assets/icons/applepay.png": "1a799017fc82af6ba7b1772c9ef3b1e9",
"assets/assets/icons/Notificaciones@3x.png": "46183aafd664786b1221ee8559969302",
"assets/assets/icons/Llevar@3x.png": "4ed3b6900bc71bddc885f28083069327",
"assets/assets/icons/fast-food.png": "136e2149e4891080ff9cf625cc0920f3",
"assets/assets/icons/Izquierda.png": "f3ba031903348f35d1c64a492adf542a",
"assets/assets/icons/Ubicacion@3x.png": "d4acdb6776b72f8542331d9a38ee5cd6",
"assets/assets/icons/Carta@3x.png": "e35158c4e71068eed512a993f7714ce6",
"assets/assets/icons/SinGluten@3x.png": "8621022eaf6566f793094cf49848ebcd",
"assets/assets/icons/sausages-1.png": "16088e85e715bf0b438715812b535bb8",
"assets/assets/icons/Perfil.png": "bee07f880c6cc403775e093928d12935",
"assets/assets/icons/categories/Cafe.png": "3641276a0a2d8ff36d55c16544c7d359",
"assets/assets/icons/categories/Carnes.png": "54902db26919fdf637013f3195498f19",
"assets/assets/icons/categories/Entrantes.png": "6cae3c7e510335f8e566efee6bdcdf4b",
"assets/assets/icons/categories/Bebidas.png": "b0dffab998b12d17480f8dd78b9b1162",
"assets/assets/icons/categories/Postres.png": "e9b7b107b934403aa4545354584577d4",
"assets/assets/icons/categories/Hamburguesas.png": "dbe3da9d513d7a3254cd034f296775e3",
"assets/assets/icons/Pago@3x.png": "f8c32909939998ecf9e88c841ac6611b",
"assets/assets/icons/Politicas@3x.png": "6fad52f8410ea24acff0ae45e09f06e3",
"assets/assets/placeholder/Postres@3x.png": "51eeeb72c461091e6b0cfed0199b1828",
"assets/assets/placeholder/Carnes@3x.png": "ea2b6b045318586377a71661c5af2972",
"assets/assets/placeholder/Hamburguesas@3x.png": "82d5ddcf79da66d3c64a35f47ce6f275",
"assets/assets/placeholder/Entrantes@3x.png": "41a36c33d654e7b563758bd4d5b78a81",
"assets/assets/placeholder/Bebidas@3x.png": "d99cbe63c032194b6a39db634b5248e5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
