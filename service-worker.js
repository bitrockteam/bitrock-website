/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f26e2b1d827b3bf851feaeb26647e02b"
  },
  {
    "url": "academy/index.html",
    "revision": "266faf6fbd94f23b581e06f4e7e14d30"
  },
  {
    "url": "assets/css/0.styles.8ead931b.css",
    "revision": "b6a1efa975a01ac3fad945bd58f15f0c"
  },
  {
    "url": "assets/img/banner.649a3715.png",
    "revision": "649a37155eba922405ae9b3c0cd08b15"
  },
  {
    "url": "assets/img/codemotion.35b040aa.png",
    "revision": "35b040aaaa58bdb8efd648aac0c0f0d9"
  },
  {
    "url": "assets/img/event-1.20295b7b.jpg",
    "revision": "20295b7b539fea086e79d09af1aaf38c"
  },
  {
    "url": "assets/img/event-2.cbc378c3.jpg",
    "revision": "cbc378c36f6d4fd5ba04a52e472937e7"
  },
  {
    "url": "assets/img/event-3.9527fcd4.jpg",
    "revision": "9527fcd4abc4946d4e177240477fd358"
  },
  {
    "url": "assets/img/event-4.6dfe7f9a.jpg",
    "revision": "6dfe7f9a03a642677bc8709b5249efff"
  },
  {
    "url": "assets/img/jw-1.c7f197f8.jpg",
    "revision": "c7f197f88f514ac0b6d528a76baf638b"
  },
  {
    "url": "assets/img/jw-2.9ac9b806.jpg",
    "revision": "9ac9b8066eaa266b79257bba0551b47d"
  },
  {
    "url": "assets/img/jw-3.059bc4c5.jpg",
    "revision": "059bc4c5214d416b425c09b18fffef52"
  },
  {
    "url": "assets/img/people.47b3a5f1.jpg",
    "revision": "47b3a5f1421bd3eb674a558fdde81adc"
  },
  {
    "url": "assets/img/scala-italy.b00f6f75.jpg",
    "revision": "b00f6f75778976aa32f983d874602abb"
  },
  {
    "url": "assets/img/space-lions-1.ccb5be0c.jpeg",
    "revision": "ccb5be0c3f1d9a6aaf3ee9b7b283caff"
  },
  {
    "url": "assets/img/space-lions-2.0fe717d0.jpeg",
    "revision": "0fe717d07eeebde0572054b24cbb4720"
  },
  {
    "url": "assets/img/tig.14f06de1.png",
    "revision": "14f06de1b58872e4559a14b645f7cf72"
  },
  {
    "url": "assets/js/10.69dbbe19.js",
    "revision": "e387417b908a3bfbf779d53aef9f8e9d"
  },
  {
    "url": "assets/js/11.9cf35c58.js",
    "revision": "0c4ec8f4ccf775908b0240e5d11fd3d0"
  },
  {
    "url": "assets/js/12.5540d895.js",
    "revision": "8fea2cae2d25f082fb843b96a88f7d6c"
  },
  {
    "url": "assets/js/13.b8438ddd.js",
    "revision": "133921564894d6d54c48ff78ba5d459d"
  },
  {
    "url": "assets/js/14.bde0fe78.js",
    "revision": "b73a69ac566914af313f7f15a2ecc33a"
  },
  {
    "url": "assets/js/15.593e7759.js",
    "revision": "5739d9f02f71d711a6cbd0bde157e426"
  },
  {
    "url": "assets/js/16.ac141dd6.js",
    "revision": "b08b2ee97cbecdbecc049d915bb3a11f"
  },
  {
    "url": "assets/js/17.bd28f839.js",
    "revision": "bd995acd38373e40a289770bdaefca1e"
  },
  {
    "url": "assets/js/18.faee8284.js",
    "revision": "1b9401b035a2b82b4b86c797e62ed58c"
  },
  {
    "url": "assets/js/19.8f7a0c7f.js",
    "revision": "4f4880b77a4b7e90ea83cdf497e56773"
  },
  {
    "url": "assets/js/2.aa64d46a.js",
    "revision": "c2a63ad872767dd335f6804ff830d9a8"
  },
  {
    "url": "assets/js/20.4fe21bcf.js",
    "revision": "edea7ca3d1798733b92e06e3be30d5d6"
  },
  {
    "url": "assets/js/21.40a55890.js",
    "revision": "af1d39bfcfbb67c9b7ced8c1c8894817"
  },
  {
    "url": "assets/js/22.a348e56b.js",
    "revision": "888ffcf0e0b37bc9f6a859c289b40de3"
  },
  {
    "url": "assets/js/23.786ff87e.js",
    "revision": "6ed4adb2844016289db77382b0278afb"
  },
  {
    "url": "assets/js/24.fe1f9089.js",
    "revision": "278c4f6c9015967521f5c6ca1123f974"
  },
  {
    "url": "assets/js/25.258cf978.js",
    "revision": "b12e369678dad6a57a8f0bb8fa3184c3"
  },
  {
    "url": "assets/js/26.1e41cfdf.js",
    "revision": "16c2b4e0eb1e7956dabc1216cf9f194c"
  },
  {
    "url": "assets/js/27.e6d74a2d.js",
    "revision": "b48dc3ee5138cd25554c113b502ff5b2"
  },
  {
    "url": "assets/js/28.6dc1857b.js",
    "revision": "2f0807919766f27716aadcc7ebb8ec71"
  },
  {
    "url": "assets/js/29.c48369b1.js",
    "revision": "4b8222bea76e139b627b967210cb8464"
  },
  {
    "url": "assets/js/3.c64dd64c.js",
    "revision": "d32af3537e47988485d55d9e81eea136"
  },
  {
    "url": "assets/js/30.5e0bccaf.js",
    "revision": "bf63b00217668b0f91ccb6a416cbac55"
  },
  {
    "url": "assets/js/31.50a7287f.js",
    "revision": "15659027d876ec33ceed118f03c890f0"
  },
  {
    "url": "assets/js/32.8cac6701.js",
    "revision": "85b222a4046e0f4ab67395be474b6fb8"
  },
  {
    "url": "assets/js/4.25830235.js",
    "revision": "4b1f13685dfb4ce7e08953c9b9c07370"
  },
  {
    "url": "assets/js/5.1e9c6513.js",
    "revision": "e7aa62f4d5df30f538c6acda271c89ce"
  },
  {
    "url": "assets/js/6.65eaa2a5.js",
    "revision": "ad5a9b9545782c7bb49977e427ed1a16"
  },
  {
    "url": "assets/js/7.787bcc8b.js",
    "revision": "3b9ec0eebaf0f116c3d4b7512570eb7c"
  },
  {
    "url": "assets/js/8.2f1112e6.js",
    "revision": "df3b398bdd7d722346f2390d9dc22b83"
  },
  {
    "url": "assets/js/9.0b9f4ed2.js",
    "revision": "0a0fafd74e81ddbedac708e381e1d746"
  },
  {
    "url": "assets/js/app.3c86be1a.js",
    "revision": "a9b3d5ebf2803feb7306a7e77bbaefa6"
  },
  {
    "url": "BitrockLogo.svg",
    "revision": "fee4520569431f74cefa9b455dd96b12"
  },
  {
    "url": "BitrockLogo.white.svg",
    "revision": "e2a991bcd773ba75d24af083f8872075"
  },
  {
    "url": "blog/academy-frontend/index.html",
    "revision": "3a95b0305fe360fc715190356b614a59"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "237f7d26d35f6a4dc3c780c16c5faae4"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "e36d512feac9b3172bcfa474b1041ab0"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "02fcad6a8d5e606f27b066dcf03b10d8"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "eb05cb66e5933e699e161e991e884026"
  },
  {
    "url": "blog/confluent-certified-training/index.html",
    "revision": "d2cb73ac1dd50b1bb2b3fab875586d46"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "00b70948130348931ac29eff04a20977"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "69d36a11ae122920b8307f9a9e135627"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "c733fe35900e3baf84c6bcef8100de0a"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "f1e0abe7fe1432293a0180bd78622b54"
  },
  {
    "url": "blog/event-review-driven/index.html",
    "revision": "62690cc5b03b3fa9c6bae108152e8653"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "17cde3197259f38c9a8f32a2247589e9"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "5c4fd2c2c386a3b3969203ee3509c066"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "09012b1144bfd88d5cdf8ed47583a0ab"
  },
  {
    "url": "blog/kubernetes-fastlane/index.html",
    "revision": "ae18e28de611c4eafa0bfc1387d7b86a"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "3eb9efba170f5cb1f37fc48f6615d7c5"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "408e2bdcef154c82d6a42991a4e34ecc"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "9142edee410b38b96f552f5c39a5453c"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "41c296a5f510b963a9fe7dc11868704f"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "744661f9e38571722aa1e911dee0aa14"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "967771f2abffda451db9cae94475b065"
  },
  {
    "url": "discover/index.html",
    "revision": "439022ced57110b16a7b7f4792633d4b"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "425346bd304a39e5a6f80c87c9dedbd3"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "b8ff2b28f0a9ad40facbecacae0f9c7e"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "318d30dbe169755f5991b74509ee1dc2"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "318d30dbe169755f5991b74509ee1dc2"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "318d30dbe169755f5991b74509ee1dc2"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "318d30dbe169755f5991b74509ee1dc2"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "00cc276d1ae4b1371ae374aaba4f0044"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "6854c6e7f443f530211fd2cef4ac05c0"
  },
  {
    "url": "img/akka-logo.png",
    "revision": "aa351543990cb47ebf5e71b3ff3f9ec9"
  },
  {
    "url": "img/bg_01.jpg",
    "revision": "b76f5a49a87becad18e5683ff4d252f6"
  },
  {
    "url": "img/bitrock-devops.png",
    "revision": "a38dfb3984c343873955b76f55cf1f5e"
  },
  {
    "url": "img/bitrock-frontend.png",
    "revision": "6b02498357d026da27bb8933aa90b77f"
  },
  {
    "url": "img/confluent_logo.png",
    "revision": "4c9369a114b22c83d92075e609c42065"
  },
  {
    "url": "img/devops-tfl.png",
    "revision": "859905c6953587903a8248e4bbc49200"
  },
  {
    "url": "img/js-logo.png",
    "revision": "24ce1737c4b8cf6120a81e5f1880f7fd"
  },
  {
    "url": "img/kafka-logo-title.png",
    "revision": "ca7ec2d9654a4f8f1535994368c5c62d"
  },
  {
    "url": "img/kubernetes-logo.png",
    "revision": "e8d54c126a34a837108e95dc5c8f1db6"
  },
  {
    "url": "img/lightbend-logo.png",
    "revision": "0aa5a8732ced17d002114140f491d546"
  },
  {
    "url": "img/main_bg.jpg",
    "revision": "649437e10c225f97051bf42c1fa2a45b"
  },
  {
    "url": "img/open_class_01.png",
    "revision": "d267a0555103b149b1137de8357c559a"
  },
  {
    "url": "img/partners.png",
    "revision": "11fade883e73a5c960a46c9f3023c753"
  },
  {
    "url": "img/posts/academy-2.png",
    "revision": "a724123d3bc0b6e7ae859e13b407b5a6"
  },
  {
    "url": "img/posts/academy-3.png",
    "revision": "e159b3735a33cd47434ee5770eef7ebd"
  },
  {
    "url": "img/posts/academy-4.png",
    "revision": "6e0b002e97e2b7efee6f75908f4bc9bd"
  },
  {
    "url": "img/posts/academy-kafka-2.png",
    "revision": "bd4ae29c655dd0ca4855f7ce5c5d815f"
  },
  {
    "url": "img/posts/academy-kafka.png",
    "revision": "93a074e860588cfd2fec060d8b2d7a3a"
  },
  {
    "url": "img/posts/academy.png",
    "revision": "bf44f6b787370d8b3a538db48617cc6a"
  },
  {
    "url": "img/posts/book.jpg",
    "revision": "fc8eea93066089613ec3c84536d4899c"
  },
  {
    "url": "img/posts/certified-training.png",
    "revision": "3e6f18735434b797d532958c7153962d"
  },
  {
    "url": "img/posts/chat-app.png",
    "revision": "dff56257f065e29179309f2b61a462f8"
  },
  {
    "url": "img/posts/corporate-2.png",
    "revision": "a54363b0f72bd00b420f5f14bb027e64"
  },
  {
    "url": "img/posts/corporate-3.png",
    "revision": "a3049aa69cbcd6fc8dd69e9943bb5786"
  },
  {
    "url": "img/posts/corporate-4.png",
    "revision": "2a44108ec7c9f37074690bcdca9d5f1c"
  },
  {
    "url": "img/posts/corporate-5.png",
    "revision": "1ca0f1a8792e926607e50faf422cc7ff"
  },
  {
    "url": "img/posts/corporate-6.png",
    "revision": "0ad03633da6788e14a998331fe9d1725"
  },
  {
    "url": "img/posts/corporate-cadiz.png",
    "revision": "dc2f0ae97aae0424e79492f1c026d238"
  },
  {
    "url": "img/posts/corporate-space-lions.png",
    "revision": "827f2ac56820ad29eba15a74fa650ff0"
  },
  {
    "url": "img/posts/corporate.png",
    "revision": "85ae0ed4c39d905b6344b8cfa66d46cc"
  },
  {
    "url": "img/posts/dbz-timeline.png",
    "revision": "6311f80994b9b96abba2b2c75050fdf2"
  },
  {
    "url": "img/posts/open_class_01.png",
    "revision": "d267a0555103b149b1137de8357c559a"
  },
  {
    "url": "img/posts/pillars.png",
    "revision": "5d5e09743cebc3d873cd7d78bb804b52"
  },
  {
    "url": "img/posts/reactive-supply-chain.png",
    "revision": "8a59a4be3d76efeaa96b80979e157bb7"
  },
  {
    "url": "img/posts/technology-2.png",
    "revision": "8a93c1bf4ecbcf7733fa78666d190d91"
  },
  {
    "url": "img/posts/technology-3.png",
    "revision": "04b884ff94a0edff8b2a2fb11a10bdce"
  },
  {
    "url": "img/posts/technology-gt.png",
    "revision": "a44148e4633d4a022eaff2731488ccd3"
  },
  {
    "url": "img/posts/technology-sl.png",
    "revision": "2e8835d94729ac989edeeec005e89cfa"
  },
  {
    "url": "img/posts/technology.png",
    "revision": "9955f56fae9b12a6d7b6db64c8135b27"
  },
  {
    "url": "img/react-logo.png",
    "revision": "1aa282c2ed220c3d21dd7467f0e07d2b"
  },
  {
    "url": "img/scala-logo.gif",
    "revision": "025e09621c43632cbf252ec87c1a4627"
  },
  {
    "url": "img/spark-logo.png",
    "revision": "916d2eb13537b5286898c3fa29ef8312"
  },
  {
    "url": "img/vue-logo.jpg",
    "revision": "d3fce5d5845c3f2d3298ea6027475028"
  },
  {
    "url": "img/wc-logo.png",
    "revision": "e6ae077d9658b5d4c5d18aa1a81a5641"
  },
  {
    "url": "index.html",
    "revision": "97d1fd37d8f5486791c96b1766526245"
  },
  {
    "url": "logo.png",
    "revision": "911eed839900ee425cdad30efcbeaade"
  },
  {
    "url": "logotype.png",
    "revision": "8da4436f59749ecbbd4ea4d511e5c597"
  },
  {
    "url": "social.png",
    "revision": "0a454f64c8c7f0077f68a146f5d1374b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
