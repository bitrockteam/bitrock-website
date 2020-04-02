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
    "url": "academy/index.html",
    "revision": "4806b88b52177cc0c921882a44767026"
  },
  {
    "url": "assets/css/0.styles.56fd42d3.css",
    "revision": "bf2184b18bd4dea0a71086457490e3b1"
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
    "url": "assets/js/10.4d296dbd.js",
    "revision": "1b798e0ad3fc2a93a5b59438ba4fa542"
  },
  {
    "url": "assets/js/11.90343575.js",
    "revision": "94098896f1fa46dba952912b4c8e7ff7"
  },
  {
    "url": "assets/js/12.c4c55138.js",
    "revision": "a9bf69c0df114ea510393fbbad87e0cd"
  },
  {
    "url": "assets/js/13.852feb30.js",
    "revision": "4c091d1652a7ffa1997f1ab7d884b5bb"
  },
  {
    "url": "assets/js/14.03679bb9.js",
    "revision": "040a09d945e15828d253a329e9fc447f"
  },
  {
    "url": "assets/js/15.6131924f.js",
    "revision": "7c5a54b8d7985c38ad66905962f303f5"
  },
  {
    "url": "assets/js/16.207c841f.js",
    "revision": "6994dee416975d14151162a540fd9689"
  },
  {
    "url": "assets/js/17.debb35d8.js",
    "revision": "5fa8151c1438becdb2417da50379ff18"
  },
  {
    "url": "assets/js/18.e87239fe.js",
    "revision": "765c0806c1fb06023ad46dec81dd86b2"
  },
  {
    "url": "assets/js/19.811b6fe2.js",
    "revision": "f586966dc73120aa9a1fa32266bfd9ac"
  },
  {
    "url": "assets/js/2.f01d44d9.js",
    "revision": "5a56ecfd930e8c9d3597e78936afa092"
  },
  {
    "url": "assets/js/20.cc1f08e7.js",
    "revision": "bcf4a94b2dd99c8051f7a91cf1a59e93"
  },
  {
    "url": "assets/js/21.dcaa86ea.js",
    "revision": "4a19acb6f1b8d81cab9868d03b50b248"
  },
  {
    "url": "assets/js/22.7e577043.js",
    "revision": "131c14808d3619eef70245f2b66e8167"
  },
  {
    "url": "assets/js/23.72b09495.js",
    "revision": "56bdf13c35441326526644286dd46824"
  },
  {
    "url": "assets/js/24.b0650991.js",
    "revision": "fd6999e3386939744dd9688f5f5c857f"
  },
  {
    "url": "assets/js/25.8a87a709.js",
    "revision": "dfbfedb88b504b3d196409f026a0789d"
  },
  {
    "url": "assets/js/26.c31de1df.js",
    "revision": "d285018fc6e5c8732a949c729c5f2953"
  },
  {
    "url": "assets/js/27.d9207d0d.js",
    "revision": "c665a5864533cb19c825a213cadcabb6"
  },
  {
    "url": "assets/js/28.701853a6.js",
    "revision": "bdebbe02d89f47415ea7e02276080e3f"
  },
  {
    "url": "assets/js/29.14067f98.js",
    "revision": "653352a03915563be4d636dc43ba1410"
  },
  {
    "url": "assets/js/3.46499431.js",
    "revision": "c5f2f085327b75beffe2621c07b0ac54"
  },
  {
    "url": "assets/js/30.aaa061f7.js",
    "revision": "8b0223e7d1acd5c3cc3f445f4c34db97"
  },
  {
    "url": "assets/js/31.c5b1c5ba.js",
    "revision": "113938a6fa45c92a770a8a5a31f5c9cd"
  },
  {
    "url": "assets/js/32.4f349ae0.js",
    "revision": "5c53487e2f802ddf6fc88d64f0b217b4"
  },
  {
    "url": "assets/js/33.7aa0e2ff.js",
    "revision": "bed805c8b47c8a7a6c73174df7881748"
  },
  {
    "url": "assets/js/34.eaf93fce.js",
    "revision": "7e79749bf41a9b4056ec04833f8bbe2d"
  },
  {
    "url": "assets/js/35.6260e308.js",
    "revision": "55ebae09be31d8bd7bd6288bb41b873b"
  },
  {
    "url": "assets/js/4.478bd09a.js",
    "revision": "e27be8ef3b1656dbec6e4e57e96c40ac"
  },
  {
    "url": "assets/js/5.aae33ceb.js",
    "revision": "97ac9abe511df915dddbecad4006fcee"
  },
  {
    "url": "assets/js/6.1974aead.js",
    "revision": "1266122d7ea9fe8e4273b5faf9ade2cb"
  },
  {
    "url": "assets/js/7.8b9b60e0.js",
    "revision": "77851f9760cdd6b1c7d461f82d2ff8cd"
  },
  {
    "url": "assets/js/8.6efa2732.js",
    "revision": "acd4da93da978ea654c94676ade09cf8"
  },
  {
    "url": "assets/js/9.c02bac5e.js",
    "revision": "8e2c348a20a0c537c1c38db600bf364d"
  },
  {
    "url": "assets/js/app.7060c550.js",
    "revision": "327d9bea1a33ae17ee6c22e90141611a"
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
    "revision": "261ed4f65dcdac50bfa3cd3199652710"
  },
  {
    "url": "blog/academy-class/index.html",
    "revision": "c5664bc0a31c80e0f530357bc3ac0b64"
  },
  {
    "url": "blog/academy-confluent/index.html",
    "revision": "410db63d549c07547d136409774ec544"
  },
  {
    "url": "blog/academy-frontend/bitrock-front-end-academy.html",
    "revision": "114eb0fa77e2dedc8d1c043d292dd57b"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "56eda30249bd269a1911414b13ec0a76"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "3c4fbc81c18483c530a01a5142b3313a"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "d5c5fe723e2e1feaeb11a5b6d7f6187b"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "2d8074bfb206191c0b93fee6e69d3b30"
  },
  {
    "url": "blog/confluent-certified-training/index.html",
    "revision": "cbf2bf91a34a3c2c85a262133e40dd62"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "8369e38c9357efc97b618ca5f6362594"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "96d68c2b29b2cb2c0b75a7a6c5a03702"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "50cdaa04af55109feb74dbf59d639023"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "1f3d1a74c9c0689e93c82b4a1e49ec9e"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "ea6a266d79ac27f0e33d4cd9733b51eb"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "2f7d4e7059fa27f84e3a7fca6fbf88b9"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "f035d27d911fb443a42a2b10d4ecf6e5"
  },
  {
    "url": "blog/kubernetes-fastlane/index.html",
    "revision": "3138a4be6dde5ed65e70b267d3c1842f"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "69e5731e08c8b15f7e4f0bbb7fa6a677"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "d1b992a298c4b8208a14a643a8a29072"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "f931f96b5bb770198d76e9d9a04137e8"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "7d773dfc8b0676469d3b957d8aa769f8"
  },
  {
    "url": "blog/second-open-class-confluent-for-developers.html",
    "revision": "702261b2b1946cb21359bfa0e3f6cd58"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "14a8d9e39cc4d34fc7d173aa077d5d93"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "fd9af5134ca2f006750daaf509f6ee0b"
  },
  {
    "url": "discover/index.html",
    "revision": "db3d63d20eed86ddc07a7711c34a6220"
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
    "revision": "99739c5568443e3a362d1662057a4e65"
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
