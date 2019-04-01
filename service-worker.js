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
    "revision": "7118fe9a3cd94edad2541e9dd78407af"
  },
  {
    "url": "academy/index.html",
    "revision": "e996e865822144de0f7ba640750c11ea"
  },
  {
    "url": "assets/css/0.styles.8ead931b.css",
    "revision": "b6a1efa975a01ac3fad945bd58f15f0c"
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
    "url": "assets/js/10.263ed7a5.js",
    "revision": "15733f01696d7a8a200b95225980b94e"
  },
  {
    "url": "assets/js/11.386b9575.js",
    "revision": "d7c6a58d8cbfb11f75ff147584c915a5"
  },
  {
    "url": "assets/js/12.5871562e.js",
    "revision": "16b6d81176d402a0e0d535533876ff32"
  },
  {
    "url": "assets/js/13.06222ad4.js",
    "revision": "2922b19ffe2fe747cd74c3510d12db57"
  },
  {
    "url": "assets/js/14.ee83868f.js",
    "revision": "20d056defadf13663891a005c8c84681"
  },
  {
    "url": "assets/js/15.459da4e3.js",
    "revision": "fc712a648567d554c56e9e86e5901cbc"
  },
  {
    "url": "assets/js/16.71248e28.js",
    "revision": "f8c0db52b55a0764953ac94c11c1c2f7"
  },
  {
    "url": "assets/js/17.5e87ce45.js",
    "revision": "a5e7984df1d95814b8c855766a500b8a"
  },
  {
    "url": "assets/js/18.6ce72560.js",
    "revision": "cad6feed66ecbba5479957fbc6bc6311"
  },
  {
    "url": "assets/js/19.81130a44.js",
    "revision": "0b94360d7d03eb39b26bd81895dd3c82"
  },
  {
    "url": "assets/js/2.dd1c9fcf.js",
    "revision": "ea10cda56a191e28b07ff5363c2ee23d"
  },
  {
    "url": "assets/js/20.24d086b4.js",
    "revision": "18b269a821d4470e3b3fe24cb59475d6"
  },
  {
    "url": "assets/js/21.029af4e6.js",
    "revision": "2f6328298e0d810657da8c8242bfc9b2"
  },
  {
    "url": "assets/js/22.8bc770bd.js",
    "revision": "17d255ace9863e56be2de4821d19f05f"
  },
  {
    "url": "assets/js/23.c5b10020.js",
    "revision": "8c085a3c622a64dca15672b4a1ae0cf4"
  },
  {
    "url": "assets/js/24.1732a66f.js",
    "revision": "dd96252ce7a61bf48aae03298d487e47"
  },
  {
    "url": "assets/js/25.98c367d9.js",
    "revision": "f56960be86f2327b49890d28c0be6826"
  },
  {
    "url": "assets/js/26.c330d3b6.js",
    "revision": "de9343a8315bd23ffdc9bb8efeb810ea"
  },
  {
    "url": "assets/js/27.acc6ec97.js",
    "revision": "7e608017f684d6f4c2e1e7f76ee27c90"
  },
  {
    "url": "assets/js/28.3b7e249f.js",
    "revision": "dc8a4c01fe1f45a7e5c323862827accc"
  },
  {
    "url": "assets/js/29.55a6532e.js",
    "revision": "9ee4ab45b6a2188c1a0cda0f4edb28d1"
  },
  {
    "url": "assets/js/3.129e558a.js",
    "revision": "0e071a1973ca86e4364fe0ff80a06839"
  },
  {
    "url": "assets/js/4.7b8c0e32.js",
    "revision": "9a0e6e370a8459b333100f92ccd73885"
  },
  {
    "url": "assets/js/5.f093b402.js",
    "revision": "5ba39625e90449a1111a409ff085233f"
  },
  {
    "url": "assets/js/6.988538d6.js",
    "revision": "5c6d68e8b9939d45512578512d9891f6"
  },
  {
    "url": "assets/js/7.2f8ec2ed.js",
    "revision": "a4b13cbb728992cecd292432d2a56eff"
  },
  {
    "url": "assets/js/8.8161d303.js",
    "revision": "0d96799c21a705960511c900cbb59a7d"
  },
  {
    "url": "assets/js/9.074e23eb.js",
    "revision": "9f6fadd1c8a00d6f1c56ab78db0e1130"
  },
  {
    "url": "assets/js/app.0765a51f.js",
    "revision": "21353f24ba903f02f08f921e918380ee"
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
    "revision": "820ca6379eea5e26563f6275b22c9d55"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "a3bbc8def3822d154469595562474a0f"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "b7140ae7bce17629ee1d584f731d6466"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "10ea044e2bd902d9825a8c4648d03706"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "6a15f8a05a6616497109b3c3ffd24ad8"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "897a8cf0f8590770279dd09eb4b9d11d"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "579e014b75e1aeeef181be59c4f768e9"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "0e8eec0cce07efdfed45ecbefe9a2aba"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "934e6adb6f74d55dc885081b3b1f9e74"
  },
  {
    "url": "blog/event-driven-review/index.html",
    "revision": "52295ec49a1ebde4bf60b3d9a27bf599"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "29cdfe1bb27f2af4f190f8c63c4792bc"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "b93adcc0e73201831cd82ee2d241ca69"
  },
  {
    "url": "blog/kubernetes-fastlane/index.html",
    "revision": "cc96c5b43094359690cb58240e5b2f7b"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "ffcc2044c4c6f6eb8019beb7867c23ed"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "b10278870ed83c5a89178473259aeac8"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "8f1c852d600b58f0c5270fc2f2370a7b"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "c42a33fc1b518313ae17c8a97f7eab4b"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "8b82d9e145ece4561c93dd23dfbabbc8"
  },
  {
    "url": "discover/index.html",
    "revision": "dbc621734898e07241e516c1c5fec8ee"
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
    "revision": "998e4bf0c9112785b4af2309305fa481"
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
