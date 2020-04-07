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
    "revision": "ed4a95c6825e07697c370500b0906012"
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
    "url": "assets/js/10.4949cd65.js",
    "revision": "fbbf91b38f335aeebe6ce715e0fa4b38"
  },
  {
    "url": "assets/js/11.5dfacead.js",
    "revision": "6294e8af8679394d1fd722a3fb201a8a"
  },
  {
    "url": "assets/js/12.9706a70d.js",
    "revision": "5ad0cee3349247dd297127d5f81914a3"
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
    "url": "assets/js/15.eda9c2a9.js",
    "revision": "1e16b7b406eb7f385e47e22575f602e0"
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
    "url": "assets/js/19.5380e323.js",
    "revision": "407ad510efd2311ab1a8922df9faaf75"
  },
  {
    "url": "assets/js/2.f01d44d9.js",
    "revision": "5a56ecfd930e8c9d3597e78936afa092"
  },
  {
    "url": "assets/js/20.1ae49f8d.js",
    "revision": "ff2c7561f0a1ed0413cfb04d4c543379"
  },
  {
    "url": "assets/js/21.254fe3c3.js",
    "revision": "17b08eb7a45ddb97710698596eab57f1"
  },
  {
    "url": "assets/js/22.23a6295e.js",
    "revision": "7cb44aadb408a81ec5a57470d5f93911"
  },
  {
    "url": "assets/js/23.d089932b.js",
    "revision": "c76c9b66b1e948f9f3b1e1b96fa12c69"
  },
  {
    "url": "assets/js/24.d7e62a72.js",
    "revision": "27b433070d87bab8930921006185cb7a"
  },
  {
    "url": "assets/js/25.a34afc92.js",
    "revision": "f85f4c83056a3b599d0c7c71aab3ff69"
  },
  {
    "url": "assets/js/26.3621189d.js",
    "revision": "e8ce5bc5424e6b447e06df9c2f615f9e"
  },
  {
    "url": "assets/js/27.05a243d9.js",
    "revision": "35b89eb0cd760fde03859a57ec913da9"
  },
  {
    "url": "assets/js/28.8413a0fb.js",
    "revision": "dfa400cf079a3b2a6aa57ba1e1341f1d"
  },
  {
    "url": "assets/js/29.54458ac4.js",
    "revision": "5b65eee3162e776eb417f50d9ed0545f"
  },
  {
    "url": "assets/js/3.46499431.js",
    "revision": "c5f2f085327b75beffe2621c07b0ac54"
  },
  {
    "url": "assets/js/30.d9389b62.js",
    "revision": "72cef0bdf95583ca78a9c2eb54a3528f"
  },
  {
    "url": "assets/js/4.478bd09a.js",
    "revision": "e27be8ef3b1656dbec6e4e57e96c40ac"
  },
  {
    "url": "assets/js/5.3f872aae.js",
    "revision": "f325a4a3309971fbc0e82029a5852d32"
  },
  {
    "url": "assets/js/6.c0a084fe.js",
    "revision": "579ee00511b22dfd92597f670dfa74b2"
  },
  {
    "url": "assets/js/7.3adf8ac2.js",
    "revision": "a0573325778324cc1afc3cbb92cbf14a"
  },
  {
    "url": "assets/js/8.e7f8985e.js",
    "revision": "420c701ea1842aa939505f880653dd3b"
  },
  {
    "url": "assets/js/9.22d0b8f5.js",
    "revision": "42089d8d9d2108f10a637488275309d4"
  },
  {
    "url": "assets/js/app.57e400c3.js",
    "revision": "1a6c2d14b3dec1ac793cbc07c6658463"
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
    "revision": "6793f34edb1ce4f78ed2f8d4ab8712dd"
  },
  {
    "url": "blog/academy-class/index.html",
    "revision": "3c5c019fe0b0c711ba2c2aba02a61bb4"
  },
  {
    "url": "blog/academy-confluent/index.html",
    "revision": "6d1d898db55b4537fcf0bf6e857f1f38"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "35f6ad5198cd1b7df06efde872c26005"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "7d0717061248243d38439ac1819174f4"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "92cd95b7d14051174ed7b6a166c4c6e0"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "96e2b15e6d61b3be32b30145f168cdd5"
  },
  {
    "url": "blog/confluent-certified-training/index.html",
    "revision": "38f9e4a989286a7028dca2817cbbe579"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "49305eeba43b5be0f8dd2219d940b3ce"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "5ba5e7ae4f4a34048a34e9675081e18a"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "eda2da299950b594c333f3f839321b7b"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "fb30a6f99521ae93f7ab1b42d57545dc"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "b31e9e7047748571d329f6768fa1b6d1"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "3cd92b09cfc1e7bf6f2e22b533d4c1b2"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "49fc517425966fefbe727f9627022dc5"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "65238305cd90a0703ee661d7bb2dfde9"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "316c5a26f1bd49fa2c46f7284bb70215"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "e5e744c1c1ad8327b85e8ef332d02998"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "40df35d635700c16848f6223275398a8"
  },
  {
    "url": "discover/index.html",
    "revision": "a36ca3b110494b84009c9fd5e0fbf84e"
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
    "revision": "a331bd0b0c47f55bd0c6a4d47a5f66db"
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
