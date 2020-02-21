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
    "revision": "ec41a55cee82aea3488b5e4563080505"
  },
  {
    "url": "academy/index.html",
    "revision": "bda71e76e2bce951486fca37b383cb54"
  },
  {
    "url": "assets/css/0.styles.36ee78bd.css",
    "revision": "1249613358a203e3a73d3e99db0bc6fa"
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
    "url": "assets/js/10.1ebf5bbc.js",
    "revision": "014f20facf6076e77c403d92f953408d"
  },
  {
    "url": "assets/js/11.d8e6b892.js",
    "revision": "b012a8d4844a1224d09eb29a14ab6e20"
  },
  {
    "url": "assets/js/12.29b794e1.js",
    "revision": "6eee3dd58938336be839140dacaffed8"
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
    "url": "assets/js/15.e38d002b.js",
    "revision": "83f2781560cdecb4e063042feec9a217"
  },
  {
    "url": "assets/js/16.171a306a.js",
    "revision": "d114334f5d6ae169714daa9badf5b6c3"
  },
  {
    "url": "assets/js/17.64b76c6b.js",
    "revision": "6861e1b4143e2072c89bfbdf7d74f337"
  },
  {
    "url": "assets/js/18.059221b0.js",
    "revision": "690ac010f7fdaf6e59db5ec936a78924"
  },
  {
    "url": "assets/js/19.8065a475.js",
    "revision": "b32a1345514729a588f1eb679edc254a"
  },
  {
    "url": "assets/js/2.1e869f4d.js",
    "revision": "4f2324f0e4e922a014ab428492111a59"
  },
  {
    "url": "assets/js/20.9bdedc39.js",
    "revision": "e5480e9c03a9a5f4545af4f0ef5fc33f"
  },
  {
    "url": "assets/js/21.1facc376.js",
    "revision": "cf1610aa781b2e003f1f645558c2e8c9"
  },
  {
    "url": "assets/js/22.0d1189a8.js",
    "revision": "b2e380bb8d553a4d451b1bdb13fd4059"
  },
  {
    "url": "assets/js/23.5453421d.js",
    "revision": "0054e348e94f767a94ec391fc7bdfba5"
  },
  {
    "url": "assets/js/24.2bfb039c.js",
    "revision": "5c23b7164fcb5f7af4e7447cb90e83bb"
  },
  {
    "url": "assets/js/25.1cffd2aa.js",
    "revision": "54b627b56470890695b063f6f55c8b65"
  },
  {
    "url": "assets/js/26.239bdb87.js",
    "revision": "86aeda3ab6421b96a6ddd434b184b2b5"
  },
  {
    "url": "assets/js/27.c7f48cd7.js",
    "revision": "14882201667a6ef3ebf33a872219286b"
  },
  {
    "url": "assets/js/28.01189dff.js",
    "revision": "35cfd79573e9390f9e43ff78892bd4a0"
  },
  {
    "url": "assets/js/29.703b5aac.js",
    "revision": "378b47efec8ba7a56e02b9b00fec1251"
  },
  {
    "url": "assets/js/3.26922839.js",
    "revision": "fbb0e44a929012634a55a60f5a4fcd76"
  },
  {
    "url": "assets/js/30.630e338b.js",
    "revision": "d4f16cb053334267eabd598492c323c8"
  },
  {
    "url": "assets/js/31.85b64ee8.js",
    "revision": "50123d9d3fd8af7d8cbf6c7a153ff68a"
  },
  {
    "url": "assets/js/32.66252d7f.js",
    "revision": "84ff11bce3aedbe4f2c2ccbba64193dc"
  },
  {
    "url": "assets/js/33.0242345d.js",
    "revision": "b2d67326d2270548f5db45fc00fe79e5"
  },
  {
    "url": "assets/js/34.4c253a16.js",
    "revision": "02d2c35c6edde6112f20ca8497c77294"
  },
  {
    "url": "assets/js/35.b2ac0b3d.js",
    "revision": "1706fda2df2e898bcba6595d297b7654"
  },
  {
    "url": "assets/js/4.25830235.js",
    "revision": "4b1f13685dfb4ce7e08953c9b9c07370"
  },
  {
    "url": "assets/js/5.c0ada70a.js",
    "revision": "3463f3eca14399318d270defac1346e0"
  },
  {
    "url": "assets/js/6.d6dcdbe4.js",
    "revision": "68d294d78b928164028f3f8ec2b68b09"
  },
  {
    "url": "assets/js/7.787bcc8b.js",
    "revision": "3b9ec0eebaf0f116c3d4b7512570eb7c"
  },
  {
    "url": "assets/js/8.5e196c38.js",
    "revision": "756543a7101a68506791e126baa3594d"
  },
  {
    "url": "assets/js/9.a89e73ff.js",
    "revision": "114a041d918e74e2238e4fdb810c2e4b"
  },
  {
    "url": "assets/js/app.4a120f9b.js",
    "revision": "5820e1748a932743ee0928333192a400"
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
    "url": "blog/Academy-20192H/confluent-certified-training-2019-full-calendar.html",
    "revision": "f552d683f252ef668520c0e4132bb055"
  },
  {
    "url": "blog/academy-class/index.html",
    "revision": "3fc26bfe2f51dbc1e10afe2228c2a380"
  },
  {
    "url": "blog/academy-confluent/index.html",
    "revision": "9e23584c578357b8946606fe41654a45"
  },
  {
    "url": "blog/academy-frontend/bitrock-front-end-academy.html",
    "revision": "54e7488641c1e89810088a2644f9cc13"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "7c9c045fc0bd842e1713deb6982b2232"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "2aba9b665d69a4130203837f80331c97"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "36acbd48cefebab2f09930cc435e8794"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "ac7d86172c2ed3e282433ab88baee5fb"
  },
  {
    "url": "blog/confluent-certified-training/index.html",
    "revision": "f43b61de511d69ba00856d106b5c0112"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "2567aed44aa1a5a767d0773f5a3b468d"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "bb7ff9b3e1cf37bd7d3db1b013d8522e"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "b9ebcca6f6edaf7af6310b1c443bd3f2"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "31e028d9dd3232a593b9a8ed4e87fd12"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "19ca82f8f7cb6aa2b6236c491ae34c2e"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "86763036611f69b889946ed076879063"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "6693ff568b71e0f62516659553764a14"
  },
  {
    "url": "blog/kubernetes-fastlane/index.html",
    "revision": "00d1eedf7158eecc9c1aeea82ff11085"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "9899c67ac9cf6b09dabf8c4cdc7b0c49"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "61e623ba190671bd429be4a21ecd5eab"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "20d59d1bce34cdcf22291a7bc22c708d"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "28167a904fc20f2f1d708aab94a5cf76"
  },
  {
    "url": "blog/second-open-class-confluent-for-developers.html",
    "revision": "40b1492826d687123624c244d8113a55"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "e171975acf4c43ddb66b727d1faf57b2"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "24b9aa8260b6bfcd634619962fe8557c"
  },
  {
    "url": "discover/index.html",
    "revision": "804cf9f9e4829b968acd6fc461506045"
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
    "url": "img/1-1.png",
    "revision": "9797afae1374276a3247b81927fec69e"
  },
  {
    "url": "img/1.png",
    "revision": "139cb1ca1078fc5548600490f0b8f170"
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
    "url": "img/Copia di Copia di Happy Easter.png",
    "revision": "7b15819a6e57f8645f137ef16e6e64ad"
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
    "revision": "00b397a764dc0f48c14a811bc6aa3113"
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
