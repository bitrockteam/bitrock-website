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
    "revision": "8efb73b4ce932ed08798d0501241b299"
  },
  {
    "url": "academy/index.html",
    "revision": "d080dcd572c2d72e6b837fd72338fc72"
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
    "url": "assets/js/10.c758bbfc.js",
    "revision": "c07fae308daea87b1a2ec232b1d24f60"
  },
  {
    "url": "assets/js/11.ead6cb45.js",
    "revision": "d6d3a48e7a39f2562c54eaabcfbd110a"
  },
  {
    "url": "assets/js/12.058feac8.js",
    "revision": "5d25e99cbfad096841340db86ad4eb54"
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
    "url": "assets/js/15.7fd64850.js",
    "revision": "568087ef1ce9ad353907a6c77c0b6534"
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
    "url": "assets/js/18.036fbcbb.js",
    "revision": "197864aa8c1f131063d675b20302ced3"
  },
  {
    "url": "assets/js/19.7bd772e0.js",
    "revision": "d287c68849cdabd3eff47870f64a39cd"
  },
  {
    "url": "assets/js/2.6350012d.js",
    "revision": "9bc4fea1387852e1646f8b5593677ef0"
  },
  {
    "url": "assets/js/20.ce2c30f4.js",
    "revision": "241164cb62803dbb9e38521f1c1f8c16"
  },
  {
    "url": "assets/js/21.440f9c76.js",
    "revision": "fdb1a6dbe67aec27397891cedd29995d"
  },
  {
    "url": "assets/js/22.e3a6a7dc.js",
    "revision": "9a608112586fcedb60c9abd050879f74"
  },
  {
    "url": "assets/js/23.774ffad0.js",
    "revision": "997233fb14e442ac5791085022d016fd"
  },
  {
    "url": "assets/js/24.078c9304.js",
    "revision": "af5d4447e00b2bc824d5b95556c4609d"
  },
  {
    "url": "assets/js/25.fb691114.js",
    "revision": "4a57fad6355d76dc5247ee4159b75cee"
  },
  {
    "url": "assets/js/26.0b5dccb3.js",
    "revision": "4336657c0876410c327c42f4851129fd"
  },
  {
    "url": "assets/js/27.d9c765ab.js",
    "revision": "b2b44381526f1acb5d39da869ebcb691"
  },
  {
    "url": "assets/js/28.20a9c97a.js",
    "revision": "d5cb084ca588c36df19f7eed95a11b6a"
  },
  {
    "url": "assets/js/29.68207232.js",
    "revision": "9dd6913a02a5a6a0cf0f7d5755116f1c"
  },
  {
    "url": "assets/js/3.d88f9d01.js",
    "revision": "db17db803b70253c6b4df9218084f27b"
  },
  {
    "url": "assets/js/30.97e75f3a.js",
    "revision": "140ac3c9125a7a4e3b05ae42c8494041"
  },
  {
    "url": "assets/js/31.259d26d1.js",
    "revision": "9bb217050a0a676723ad64fdc7bc7c2b"
  },
  {
    "url": "assets/js/32.8cac6701.js",
    "revision": "85b222a4046e0f4ab67395be474b6fb8"
  },
  {
    "url": "assets/js/4.9cd5cc17.js",
    "revision": "e43642d79465ab2be6bc23f12bb33c4e"
  },
  {
    "url": "assets/js/5.86c057ee.js",
    "revision": "8692a07cabd7c0b010403ec2875fb20e"
  },
  {
    "url": "assets/js/6.c0b3905c.js",
    "revision": "aba46d39c4398a2ddb78e5166d1ae5cf"
  },
  {
    "url": "assets/js/7.787bcc8b.js",
    "revision": "3b9ec0eebaf0f116c3d4b7512570eb7c"
  },
  {
    "url": "assets/js/8.e12938e2.js",
    "revision": "4e9607f446149ddc7ce899b2e5d147ad"
  },
  {
    "url": "assets/js/9.8d260e94.js",
    "revision": "7778871639cd1a7830ca1b4baf447610"
  },
  {
    "url": "assets/js/app.32e7cac7.js",
    "revision": "b9e9482d99a5d7f31caa5be81a24def8"
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
    "revision": "10637ec3cbb88cf3e16f1bda37ced545"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "b18b1bce2ad493dd863c9d90ff03528c"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "862a808e9f89882cbd5dd53f25524bf6"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "6f64e6aa9098ca8f26950a08937c2fda"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "d07fd451c3d9c76ccb83c73a043e0c80"
  },
  {
    "url": "blog/confluent-certified-training/index.html",
    "revision": "58c89453fc1b4cfd2f3ef51ea24496b8"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "d964a3b83807b3bbaaf29d46c64b9c9c"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "31bf95a5433a9a36b7e741e5beee4f3b"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "f3493ca29c691a140cfdeeee5f463900"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "0262212a267a29a12618d6f29d0dd9c6"
  },
  {
    "url": "blog/event-driven-review/index.html",
    "revision": "f1403e2cae5278290af2823ce00feb9e"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "7d8a88f6b8e9fb486e100c5e81fe679d"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "a7456e90967d6a2b794891a0881d843c"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "50e9d42eed603007f2ed9438a6ae7b94"
  },
  {
    "url": "blog/kubernetes-fastlane/index.html",
    "revision": "451c8332040c027226fabaaca7d9ed80"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "ab9c0b7837473f5a2abb0938b0af88c8"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "0d5376a94f021a8452c64e7078fe841b"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "dd91846458644e01a223a437904a4e57"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "595b3156b4e83ebd9c29125280c62f52"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "5497a56e4b4dfc1411d032e9aa5bb4aa"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "71084347a277c43f4b80eebbf0978527"
  },
  {
    "url": "discover/index.html",
    "revision": "2a3ebb22848fcddca4513d32e74e2a57"
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
    "revision": "c37b09b222af193adb298cf31ff85060"
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
