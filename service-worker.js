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
    "revision": "38fe470c29b31354b3f4d03c2a1234c9"
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
    "url": "assets/js/11.d4db5c8f.js",
    "revision": "1b83074b53a2d394c582347e8dfc2a69"
  },
  {
    "url": "assets/js/12.d3ca6ee9.js",
    "revision": "d3d979575c34ff4c02098da320b2fbf7"
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
    "url": "assets/js/15.e7e97bef.js",
    "revision": "d60012d92f41e2110cfc1b94561ff8b1"
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
    "url": "assets/js/25.e0bd22b1.js",
    "revision": "437e7bba4a1e583af4f2589c7a1cebce"
  },
  {
    "url": "assets/js/26.3555f3cc.js",
    "revision": "c657877f9b9fd9f3db5eeca5d4d15f56"
  },
  {
    "url": "assets/js/27.8e6ad6ae.js",
    "revision": "a708a98105691778c72b6af91cbd19d6"
  },
  {
    "url": "assets/js/28.fe5dd25c.js",
    "revision": "d3f805ec9975d7f0f8ee462dbbc83248"
  },
  {
    "url": "assets/js/29.5908d9de.js",
    "revision": "f0a5808c84f6dce3e41300ecca097c88"
  },
  {
    "url": "assets/js/3.46499431.js",
    "revision": "c5f2f085327b75beffe2621c07b0ac54"
  },
  {
    "url": "assets/js/30.02cb9026.js",
    "revision": "9447a19a84850b5778acf2e2fdf37c24"
  },
  {
    "url": "assets/js/31.6cc66153.js",
    "revision": "dd89af1aafb946a5d3294f166a8d20bb"
  },
  {
    "url": "assets/js/32.9590df92.js",
    "revision": "8b9ba1a51c4f5abaef01a8a676ae8cac"
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
    "url": "assets/js/6.68a6d20a.js",
    "revision": "2c1f263b6bfce79cd7895e262ea15ec1"
  },
  {
    "url": "assets/js/7.8b9b60e0.js",
    "revision": "77851f9760cdd6b1c7d461f82d2ff8cd"
  },
  {
    "url": "assets/js/8.a5554dae.js",
    "revision": "5950d47d2913d181b4b5c7ce7df4e80a"
  },
  {
    "url": "assets/js/9.c4e99e81.js",
    "revision": "2914391999238a674bc06292c62eee09"
  },
  {
    "url": "assets/js/app.d2a4bf2c.js",
    "revision": "3fa7bd03bda654cecf215571e69c956e"
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
    "revision": "c05c3f081febbb9d3cad03726782e1a5"
  },
  {
    "url": "blog/academy-class/index.html",
    "revision": "b6532f5eab1c1e42b76a009fae746c4f"
  },
  {
    "url": "blog/academy-confluent/index.html",
    "revision": "2e11a24d81c82838d8c78a206311f10b"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "460e33bdc2e145e0fb21ab7a3e44e405"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "4f04c767787f09a3c179261241365d8e"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "07f5e45c117a68ac3734bf905efd8fbf"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "02895b9310884e5530d7968343f1e208"
  },
  {
    "url": "blog/confluent-certified-training/index.html",
    "revision": "433801e9259e9703610d89d3dee291dc"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "6e428140cddb4b0d2e2970edee0317f9"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "aa0d0d8b767b385494f69aa45216a25a"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "62743e7327d884e7c79a60ffbc20443e"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "cd752097f33880e245bb79aa14417538"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "10c59ba49c58ad498826ff6a8dcf1d4d"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "948cfc9e2fa0424412a0dad3aee863ba"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "446abae54ba5675cc139f1627d7250c1"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "098506ee1bc57631d8878a0673d0b21c"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "d0c3520c90536173f7f1347d2857038b"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "98f36cb53f7e8c9926270647c8e1bccc"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "2c11ef61635bd2e843b5df9b00a80747"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "518b3a267c894b9470342db9691fc627"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "1c971efedae4468c92517ccc638d033a"
  },
  {
    "url": "discover/index.html",
    "revision": "92c04cae5dc5cfdfc0b7b4706f41b1e2"
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
    "revision": "6e997ad3e3dbd85485bd1da5d2a878cb"
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
