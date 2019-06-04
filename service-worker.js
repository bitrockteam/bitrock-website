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
    "revision": "5f4a1ed6f5f3b599e1e0d84a07d7aaf0"
  },
  {
    "url": "academy/index.html",
    "revision": "6218462e8c795b362bf5d16e8c64ca5d"
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
    "url": "assets/js/10.04869fff.js",
    "revision": "415c55557fc6083f3d663db32e9c32b4"
  },
  {
    "url": "assets/js/11.981be4bc.js",
    "revision": "c208a550c123134e8d275640ef236114"
  },
  {
    "url": "assets/js/12.2b5e478a.js",
    "revision": "aa689f852c0efacfa5fa275e325273f7"
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
    "url": "assets/js/15.bf97814c.js",
    "revision": "1bdb3e9e2ede5e04ac430eda5a22862a"
  },
  {
    "url": "assets/js/16.045717bc.js",
    "revision": "b08b2ee97cbecdbecc049d915bb3a11f"
  },
  {
    "url": "assets/js/17.9cec9b99.js",
    "revision": "f2807fc6f334bcbde5aba01a4e05380b"
  },
  {
    "url": "assets/js/18.66c9d69e.js",
    "revision": "73d6fd204fade6ba42c407cda8736326"
  },
  {
    "url": "assets/js/19.7056ef32.js",
    "revision": "9564291f10e4eb8956c60eaaeaa220dc"
  },
  {
    "url": "assets/js/2.aa64d46a.js",
    "revision": "c2a63ad872767dd335f6804ff830d9a8"
  },
  {
    "url": "assets/js/20.ca68ccc9.js",
    "revision": "0676d623eb02d2ded8af70873ef80b84"
  },
  {
    "url": "assets/js/21.33b7c070.js",
    "revision": "81e8a654d6ad121260ae1361baeb136c"
  },
  {
    "url": "assets/js/22.f6e9b90b.js",
    "revision": "f97ab25728ecf3145c4e7248b076aeb0"
  },
  {
    "url": "assets/js/23.16796b6a.js",
    "revision": "a118ba3fc9818e34462fc380bf4a1626"
  },
  {
    "url": "assets/js/24.f50c5e7e.js",
    "revision": "0207b07e261911e5efa834efc857ff8f"
  },
  {
    "url": "assets/js/25.812619f9.js",
    "revision": "1486f209288c251e9976405f7f186f38"
  },
  {
    "url": "assets/js/26.513b4d4c.js",
    "revision": "e03c3c64997a262266313bf6e964efc4"
  },
  {
    "url": "assets/js/27.2fb3157b.js",
    "revision": "3e3ff5b12e5268b5cce28969fc12efa6"
  },
  {
    "url": "assets/js/28.b894a337.js",
    "revision": "c48e60259fd051a2e190d21dca7bdd1a"
  },
  {
    "url": "assets/js/29.048710df.js",
    "revision": "432fa0269090658b7b68ea046977a6ae"
  },
  {
    "url": "assets/js/3.c64dd64c.js",
    "revision": "d32af3537e47988485d55d9e81eea136"
  },
  {
    "url": "assets/js/30.f28e74c5.js",
    "revision": "6e609b2f5318a79c0937e1774cb71892"
  },
  {
    "url": "assets/js/31.078ebd43.js",
    "revision": "447de7cde9bead9d44b9e2a4b6bc9483"
  },
  {
    "url": "assets/js/32.7e5ebfc6.js",
    "revision": "8934369bcc3dafe0a909d9da1e146bc3"
  },
  {
    "url": "assets/js/33.c22e4543.js",
    "revision": "9dcf2f0b7cda078774963b2c1fce6dc0"
  },
  {
    "url": "assets/js/4.25830235.js",
    "revision": "4b1f13685dfb4ce7e08953c9b9c07370"
  },
  {
    "url": "assets/js/5.8b47f687.js",
    "revision": "5e9b6c4b1172a62d9c93c891ae20ec82"
  },
  {
    "url": "assets/js/6.bdd768fe.js",
    "revision": "6ddc6991e672ed340973125154c4de6a"
  },
  {
    "url": "assets/js/7.787bcc8b.js",
    "revision": "3b9ec0eebaf0f116c3d4b7512570eb7c"
  },
  {
    "url": "assets/js/8.4bfbfb3f.js",
    "revision": "3dfdc4290cbdb9bbb14cecad707b0c2b"
  },
  {
    "url": "assets/js/9.f46f418c.js",
    "revision": "ed4d377b91a240a431465f14f96e531a"
  },
  {
    "url": "assets/js/app.78a3e22c.js",
    "revision": "a47344cabab8a2d3a9d470b01dfb0bc5"
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
    "url": "blog/academy-frontend/bitrock-front-end-academy.html",
    "revision": "ee8d15ffcfc179383a2200e11e7d3315"
  },
  {
    "url": "blog/academy-kafka-class/index.html",
    "revision": "b9ecbc0a14c084654a1b1130a4ae967f"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "c9abda65afc629ae157d8b763aad2e21"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "d6ee73f7f0bad8ed3b1be70685985440"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "cb00b03624be91fd5e1269512ead629e"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "1c96079c8880f2b523903f01ace9f544"
  },
  {
    "url": "blog/confluent-certified-training/index.html",
    "revision": "bf7c4a0b0a6dd05b93eae0a7e1c75932"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "332aede804d36064d395e5d0ca96f556"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "fac0dce8d39cddc6e38d8f662b6bf5d6"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "27a7418867e181d89f17b3c63897e848"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "6550d49a63922b0762af824e8fe62836"
  },
  {
    "url": "blog/event-review-driven/index.html",
    "revision": "5bcc9cb9b3ef0e1c7756b9cb13dc06e3"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "2a36959fe5e82f77b8ae2a4f1a16e617"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "675b69e84d14abb788fe2da5343901f7"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "acd58669b28146f1a379e9d3cbae62ee"
  },
  {
    "url": "blog/kubernetes-fastlane/index.html",
    "revision": "df09af5d287fb685cf6142d2fc3e1964"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "0f58f782a5a1b7c2219ca0814415bc6f"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "584f3658b37ba94ae2abe111373cc083"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "0ea496252ab74a1d8c8ee60c8f7a7c1d"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "fd8f23056f8aad2d4c5ab98a51244a50"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "f07ff8d481eb55e202834382dc012477"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "561acc34857beaf188bac5f2bb7336fd"
  },
  {
    "url": "discover/index.html",
    "revision": "661291fe999f905ec8f2beced6b948ac"
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
    "revision": "65dfd3d86b51e198ca1d1da42ca3392f"
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
