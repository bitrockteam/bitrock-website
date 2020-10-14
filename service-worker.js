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
    "revision": "0015c2870eda03a81d4eb0eafbe78635"
  },
  {
    "url": "assets/css/0.styles.b17daab2.css",
    "revision": "4861089334a22e985d9b92e5ef3fae54"
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
    "url": "assets/js/10.1eded6dc.js",
    "revision": "fef036b198bd0b7ab02525ba6b37b345"
  },
  {
    "url": "assets/js/11.c912d9a0.js",
    "revision": "4bcec381a7c853172a5248593144b096"
  },
  {
    "url": "assets/js/12.09d69e0b.js",
    "revision": "c66cb38248b21473c9839600a8fe2df1"
  },
  {
    "url": "assets/js/13.1e8463b0.js",
    "revision": "c805c3ad80b53199c9492cc7976ffacd"
  },
  {
    "url": "assets/js/14.66b2bd83.js",
    "revision": "b44c0a57d91249aad4237fb43f1b35ad"
  },
  {
    "url": "assets/js/15.d6ff773e.js",
    "revision": "d398f388498735f4fd871b3e36fbc2b9"
  },
  {
    "url": "assets/js/16.09c65213.js",
    "revision": "dd0255720eeb8552c905f5182cd43a7a"
  },
  {
    "url": "assets/js/17.a453b3da.js",
    "revision": "ee89ead5a87235009d1f94bb732c7696"
  },
  {
    "url": "assets/js/18.95c4d29c.js",
    "revision": "67193c208cf303561b10776bd10c78c1"
  },
  {
    "url": "assets/js/19.71b94f5a.js",
    "revision": "446e77e60a30fea5c5b6884cadf544b9"
  },
  {
    "url": "assets/js/2.fb815d92.js",
    "revision": "3c53614d906cce8370f378bf0f257a9d"
  },
  {
    "url": "assets/js/20.1735d7b0.js",
    "revision": "dcbf5bdb272a0969c5a3d78b46c5f140"
  },
  {
    "url": "assets/js/21.d59e25a1.js",
    "revision": "e0a85fda080a7539cbad786a3aafb3f3"
  },
  {
    "url": "assets/js/22.c92c7f3f.js",
    "revision": "18b658a23bd81bedb6c83869500b5c16"
  },
  {
    "url": "assets/js/23.2103b8ae.js",
    "revision": "7e811d7df858006914a442c157e69c3f"
  },
  {
    "url": "assets/js/24.4cdb4123.js",
    "revision": "81d506ddacd841fa7753c300e82f84f4"
  },
  {
    "url": "assets/js/25.97fab8d0.js",
    "revision": "ab1c3d390934cee36dd6b1b0d9bbc244"
  },
  {
    "url": "assets/js/26.2a00d6f4.js",
    "revision": "1cea056acc0923a908f1bfb94bf4efb2"
  },
  {
    "url": "assets/js/27.6ecd8c56.js",
    "revision": "d2b06b166a2efd565619a1c56d2a8139"
  },
  {
    "url": "assets/js/28.23799554.js",
    "revision": "7c4845c5a570911a5d365ad605d4bec8"
  },
  {
    "url": "assets/js/29.12a3f7ea.js",
    "revision": "2fd3b9d50a2272a6bf5ba78bbc2eefa2"
  },
  {
    "url": "assets/js/3.44cb95ca.js",
    "revision": "da4a78b4b2904db48a193566d2ce2ed1"
  },
  {
    "url": "assets/js/30.f2c75cc4.js",
    "revision": "7a2f9ba3b42d612a5efa5d8fd67f3341"
  },
  {
    "url": "assets/js/31.b9130822.js",
    "revision": "0fe473d855067109308567b1c04cb977"
  },
  {
    "url": "assets/js/32.5d91ee5f.js",
    "revision": "12403f3729db3b3d172b273259f04697"
  },
  {
    "url": "assets/js/33.ed578863.js",
    "revision": "2e5bccd8bf6aedc0cb40d9ccb33a85db"
  },
  {
    "url": "assets/js/34.1596f0d3.js",
    "revision": "cbe53b06e5f3c27d94df1356ae23b4a2"
  },
  {
    "url": "assets/js/35.9d012647.js",
    "revision": "c6af81778d52d9e9c6b58ecf7776e81f"
  },
  {
    "url": "assets/js/36.3fd291c5.js",
    "revision": "1a1eeb0f15ad86aeff21b1b12c5ebbd9"
  },
  {
    "url": "assets/js/37.23cbb63e.js",
    "revision": "4437e4912c7eeaa21d53b58687cfb18a"
  },
  {
    "url": "assets/js/38.14a62536.js",
    "revision": "7b023cfe33fe710c0c9fb97fc4bd111a"
  },
  {
    "url": "assets/js/39.d9628084.js",
    "revision": "6d7abd0873095eb64c8be91fb17fb9bb"
  },
  {
    "url": "assets/js/4.187cc577.js",
    "revision": "2804977b6f528fe10aeba075be6c746c"
  },
  {
    "url": "assets/js/40.5f43dfc8.js",
    "revision": "dacdc99e417cabdf4b70d2ef6ce94311"
  },
  {
    "url": "assets/js/41.4132983b.js",
    "revision": "9d31737692937c6be9e4fd0a3028dcbe"
  },
  {
    "url": "assets/js/42.20661f9a.js",
    "revision": "eb1bc0c0f40ba1976f9925d498839c98"
  },
  {
    "url": "assets/js/43.c0676b88.js",
    "revision": "1a561adb74a52a959695a52b2f348d14"
  },
  {
    "url": "assets/js/44.d4c9b385.js",
    "revision": "22adf83a2d180da31a5dd4bf5e784113"
  },
  {
    "url": "assets/js/5.16fe373e.js",
    "revision": "641ebd4e2f834c2de1b13a58e381783f"
  },
  {
    "url": "assets/js/6.94a49d88.js",
    "revision": "01d55ac50785d144aea297f5d93b8128"
  },
  {
    "url": "assets/js/7.f5d1f2d5.js",
    "revision": "723142b7a16fa4e341d35fc11a97375b"
  },
  {
    "url": "assets/js/8.a6fd5871.js",
    "revision": "bfeae5a709069bde8eaa5f119134e806"
  },
  {
    "url": "assets/js/9.91369f7b.js",
    "revision": "4b07be96cd63980f800b631ff33efecf"
  },
  {
    "url": "assets/js/app.c74b0768.js",
    "revision": "cb70c4bb01594169acfed5e6c4b3cf12"
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
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "5961c19cc46beb2366577e7aeb9ef662"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "80ae40e7b903d8940af93c4213184822"
  },
  {
    "url": "blog/an-introduction-to-deno.html",
    "revision": "4bb04524d0ef58395963e3e6debaa74a"
  },
  {
    "url": "blog/Bitrock DevOps Team joining HashiCorp EMEA Vault CHIP Virtual Bootcamp/bitrock-devops-team-joining-hashicorp-emea-vault-chip-virtual-bootcamp.html",
    "revision": "5616e7c64a162fec19f46b0ad05ca881"
  },
  {
    "url": "blog/bitrock-rooms-a-ux-ui-project-to-face-covid-19-challenges.html",
    "revision": "6fa1c9629a620af16008226e50f14ad2"
  },
  {
    "url": "blog/bitrock-virtual_office-journal.html",
    "revision": "b568238a7f14152ae287628bff089df3"
  },
  {
    "url": "blog/bringing-gdpr-in-kafka-with-vault.html",
    "revision": "9600e52482af037f13c9b1f9b3af0da3"
  },
  {
    "url": "blog/ByteConfReact_2020 - Claudia Bressi/byteconf-2020-claudia-bressi-frontend-developer-bitrock-among-main-speakers.html",
    "revision": "e2a2f9b96ea89ffe2004533ee9657ceb"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "d855bdf74f405279c51e3cf253f71ef7"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "98b047809703dfa8b962c2af70701621"
  },
  {
    "url": "blog/data-engineering-handling-unreliable-sources.html",
    "revision": "c1a08a2be6751c5f0769ba669a8a446f"
  },
  {
    "url": "blog/from-layered-to-hexagonal-architecture-hands-on.html",
    "revision": "2d0d76f3b50ec14f7857a054771ea7a3"
  },
  {
    "url": "blog/getting-started-with-prometheus.html",
    "revision": "424da7c2d1ca1df878df3132231e02cb"
  },
  {
    "url": "blog/getting-started-with-react-push-based-architecture.html",
    "revision": "0af122b30d5c4ac316e25c1d89e2a4e5"
  },
  {
    "url": "blog/HashiCorp and Bitrock sign partnership to boost IT infrastructure innovation/hashicorp-and-bitrock-sign-partnership-to-boost-it-infrastructure-innovation.html",
    "revision": "0553c918dd481e3892fb42f7742013f8"
  },
  {
    "url": "blog/index.html",
    "revision": "7ea7200418fffca300a6790baf18fbea"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "2a61311c1a33bc6e56d1dff8e26537bb"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "c8ee26a82a71f64ed460ad2dc2ce3972"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "91d9873b32dd5a01c26b9b91889115cd"
  },
  {
    "url": "blog/Life@Bitrock in the Covid-19 Era/life-bitrock-in-the-covid-19-era.html",
    "revision": "29bd2b465d742c9caea399a1cf5e58d5"
  },
  {
    "url": "blog/monitoring-kafka-connector-with-kubernetes.html",
    "revision": "33653de3ad1a04af89f5429fca62847c"
  },
  {
    "url": "blog/polymorphic-messages-in-kafka-streams.html",
    "revision": "3b909c46d3e90ae62c0b6d9dab74257e"
  },
  {
    "url": "blog/react-bandersnatch-experiment-getting-close-to-a-real-framework.html",
    "revision": "3fc6043c877fcc4f4f7f95e96997e734"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "5c36019284af18b078078f2f6825a73a"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "083dfaa5417ebe5445e15dc076a61442"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "221a31df9f5f5140b47ad41bbd9c2617"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "1d0fa9a80db83e4d160b05648aaa460e"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "84c93d6b16fc36a0b39a26911769a815"
  },
  {
    "url": "blog/terraform-community-tools.html",
    "revision": "8611027e5fe649b583ac0af2ad8826ba"
  },
  {
    "url": "blog/the-jamstack-proposition.html",
    "revision": "2a2ff48942a52ad4c45294194c0b0349"
  },
  {
    "url": "blog/Turning Data at REST into Data in Motion with Kafka Streams - Confluent Blog/turning-data-at-rest-into-data-in-motion-with-kafka-streams-confluent-blog.html",
    "revision": "21d01c9e5773f2afac857590c7ac442e"
  },
  {
    "url": "discover/index.html",
    "revision": "330bed378442b6bdd23d9ef5b084a1cb"
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
    "url": "img/1_u.png",
    "revision": "f0cc4a06674f1ae98214948f8c125cdb"
  },
  {
    "url": "img/1-1.png",
    "revision": "9797afae1374276a3247b81927fec69e"
  },
  {
    "url": "img/1-2.png",
    "revision": "b5d2e8690897688a612781490a353a19"
  },
  {
    "url": "img/1-3.png",
    "revision": "d4b6b793714fa7e9079bc2e0657c4a25"
  },
  {
    "url": "img/1.png",
    "revision": "139cb1ca1078fc5548600490f0b8f170"
  },
  {
    "url": "img/10.png",
    "revision": "65d4a023501e45d9c27a081c53fee2a8"
  },
  {
    "url": "img/11.jpg",
    "revision": "b046a5bee66bdc4b6ddb1159c78b271b"
  },
  {
    "url": "img/11.png",
    "revision": "0bd467da91c8399198d361ea47b11294"
  },
  {
    "url": "img/12.png",
    "revision": "d1b49012a419067dde6aaf0a755d1513"
  },
  {
    "url": "img/2_u.png",
    "revision": "d7976a1fd7f07a5e18c83fc1e9e6d28c"
  },
  {
    "url": "img/2-1.png",
    "revision": "06baec4891c8c613f2276ac65aca279e"
  },
  {
    "url": "img/2.png",
    "revision": "bc06357d6c260c89a22b6bfd9485f82a"
  },
  {
    "url": "img/20.jpg",
    "revision": "f6929ac090cd6f1ecb13b1e2be1a06f6"
  },
  {
    "url": "img/3_u.jpg",
    "revision": "f99907a1173479f98b8988ff6eeeb413"
  },
  {
    "url": "img/3-1.png",
    "revision": "6c97fa52f61db9116f845117945aeef7"
  },
  {
    "url": "img/3.png",
    "revision": "6091cd3e4b7c0ba074b24a17a238f745"
  },
  {
    "url": "img/4_u.png",
    "revision": "8d2c78a2c8f5864732b3008ac66020cf"
  },
  {
    "url": "img/4-1.png",
    "revision": "8cfa8fa673fe0bd12725f3dae141f56b"
  },
  {
    "url": "img/4.png",
    "revision": "31c2989918ed259584b78580c89e36ef"
  },
  {
    "url": "img/5_u.png",
    "revision": "43c9481bf3ebf0d74cc966a981c96a19"
  },
  {
    "url": "img/5-1.png",
    "revision": "0b84fed9fe959bae5ee3d9553fa2e7ee"
  },
  {
    "url": "img/5.png",
    "revision": "16ecad2d508ea097a77493e9daf29541"
  },
  {
    "url": "img/6_u.png",
    "revision": "c6d67be359487618924d1ef6b134e2af"
  },
  {
    "url": "img/6-1.png",
    "revision": "4eb40c78465f796627b32874a6f1463b"
  },
  {
    "url": "img/6.png",
    "revision": "21b5c84d3d18fb29cf8c5506c398dc94"
  },
  {
    "url": "img/7.png",
    "revision": "e2c93f389feff94efe2af79699bc3d19"
  },
  {
    "url": "img/8.png",
    "revision": "72d2e2f9a98729c0bcf8ed0aa300ef84"
  },
  {
    "url": "img/9.png",
    "revision": "1c9cea7ac9da0b223394d24e7a5375cf"
  },
  {
    "url": "img/akka-logo.png",
    "revision": "aa351543990cb47ebf5e71b3ff3f9ec9"
  },
  {
    "url": "img/angular.png",
    "revision": "17f6a3bb969cb89ab2c875d103efa17d"
  },
  {
    "url": "img/Apache Kafka 1.png",
    "revision": "c16d0c88ab924cb2db7f98c102f16c36"
  },
  {
    "url": "img/Apache Kafka 2.png",
    "revision": "643cf542802c44f0c7fd980a11cee1a0"
  },
  {
    "url": "img/bg_01.jpg",
    "revision": "b76f5a49a87becad18e5683ff4d252f6"
  },
  {
    "url": "img/binoculars.png",
    "revision": "e8a23052d8f69d3589b2dcaeff58a251"
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
    "url": "img/bitrock-rooms_cover.png",
    "revision": "c61f6713ded7f78b21a60f7a397db47e"
  },
  {
    "url": "img/bitrock-virtual_office-journal.png",
    "revision": "6b72efa30de66e21661831dcc7277777"
  },
  {
    "url": "img/bringing-gdpr-in-kafka-with-vault.png",
    "revision": "35c8b3051395e4c879fe33c3346d0871"
  },
  {
    "url": "img/Byteconf 2020.png",
    "revision": "4314a077018022680e39eee16cdbe83e"
  },
  {
    "url": "img/Cerved use case.png",
    "revision": "5ddd15c09587007c422f2212af93ee16"
  },
  {
    "url": "img/Claudia Bressi.png",
    "revision": "65b68894a6977ce2af0c8aebf3176dc4"
  },
  {
    "url": "img/cloud.png",
    "revision": "e8c608e333c571bfbe19e907de5f06ab"
  },
  {
    "url": "img/Confluent Blog.jpeg",
    "revision": "e315bc708108041378ebd5f5cdf1b110"
  },
  {
    "url": "img/confluent-training.png",
    "revision": "601f0fb8c8d655ba13a16d0b77b0fc4a"
  },
  {
    "url": "img/confluent.png",
    "revision": "3b784e48b23ad6f82c255cd8a78e5da2"
  },
  {
    "url": "img/Copia di Copia di Happy Easter.png",
    "revision": "7b15819a6e57f8645f137ef16e6e64ad"
  },
  {
    "url": "img/Corporate Chat.jpg",
    "revision": "32cb3aac813f92affbc05d2b6e86e313"
  },
  {
    "url": "img/d-1.png",
    "revision": "58435f1d9065abd5564765e8fc5a45ba"
  },
  {
    "url": "img/d-2.png",
    "revision": "d00b9b9ca00cc4e162a6a937625f44ae"
  },
  {
    "url": "img/d-3.png",
    "revision": "b082435a998adb37d8c5a31600b8433d"
  },
  {
    "url": "img/d-4.png",
    "revision": "edb1d4d941c7a4f444d875d9188d2196"
  },
  {
    "url": "img/d-5.png",
    "revision": "47ff3e69e714493fea5089af40424ef2"
  },
  {
    "url": "img/d1.png",
    "revision": "0ec736dd3ca58b18a77076427d4afb11"
  },
  {
    "url": "img/d10.png",
    "revision": "07dd3610a066e250ac6113dd387933b9"
  },
  {
    "url": "img/d2.png",
    "revision": "0ec736dd3ca58b18a77076427d4afb11"
  },
  {
    "url": "img/d3.png",
    "revision": "e51025611a3c05198824666ef30617ae"
  },
  {
    "url": "img/d4.png",
    "revision": "754d36f92555adae3c296c7edb8acba3"
  },
  {
    "url": "img/d5.png",
    "revision": "1ec8ca1b0464bd7c18844eeb38c05cae"
  },
  {
    "url": "img/d6.png",
    "revision": "fda8e29bff0bfc8bccf8d1f6f6cc7466"
  },
  {
    "url": "img/d7.png",
    "revision": "9a5e0a7917a5bb137828767bcf18671e"
  },
  {
    "url": "img/d8.png",
    "revision": "641a6b47640e4ed388a8427a62a99f03"
  },
  {
    "url": "img/d9.png",
    "revision": "4e7c17bf11440d81318348e43a88b3b8"
  },
  {
    "url": "img/de_bs_example_1_img_1-d8fdbf56.png",
    "revision": "d8fdbf56fc84eaddce6749b0112b37e3"
  },
  {
    "url": "img/de_bs_example_2_img_1-bb498020.png",
    "revision": "bb4980200288b13c6257f5eac4bc595d"
  },
  {
    "url": "img/de_bs_example_2_img_2-9bdc205e.png",
    "revision": "9bdc205e0a28caf70368c1004e77116a"
  },
  {
    "url": "img/deno.png",
    "revision": "dd88711c6842d7b19722f4534180fac7"
  },
  {
    "url": "img/deno1.png",
    "revision": "c04be213e7045713fb87186dd137c3d0"
  },
  {
    "url": "img/deno2.png",
    "revision": "44200e4404df1a854ea5de0db78c364c"
  },
  {
    "url": "img/deno3.png",
    "revision": "7040a7402d045fde1bc0897f29d4f9fb"
  },
  {
    "url": "img/deno4.png",
    "revision": "860eaebce7f7a450a58ad580c335ece3"
  },
  {
    "url": "img/deno5.png",
    "revision": "7f314f0cef22dc6242aaf1ae50e5be44"
  },
  {
    "url": "img/deno6.png",
    "revision": "b11d1641217b6721a0fe5209ba63624b"
  },
  {
    "url": "img/devops-tfl.png",
    "revision": "859905c6953587903a8248e4bbc49200"
  },
  {
    "url": "img/dotted.png",
    "revision": "f235b3373bfa2398fb9e9a81c9a8052e"
  },
  {
    "url": "img/download.png",
    "revision": "2ada1ece66fcc81d704c2ba46f9dd7d3"
  },
  {
    "url": "img/Evento 1.jpg",
    "revision": "83b1bc744f568a3a548f3888baf8c161"
  },
  {
    "url": "img/Evento 2.jpg",
    "revision": "d629932fbb492b9d5c2bdd7307ac1ae0"
  },
  {
    "url": "img/Evento 3.jpeg",
    "revision": "9cf794c2aba9e13c14247173fe529f7e"
  },
  {
    "url": "img/Evento 4.png",
    "revision": "d3fe8cd5e94391688f683d8eb6faeead"
  },
  {
    "url": "img/Evento 5.jpg",
    "revision": "0e23ccfc96f7726f2948ab5e288645be"
  },
  {
    "url": "img/flink.png",
    "revision": "930f2ede7e3e5309362be38d646efc7f"
  },
  {
    "url": "img/from-layered-to-hexagonal.png",
    "revision": "f668b555bb3e0957390b17be9bc9e312"
  },
  {
    "url": "img/getting-started-with-react-push-based-architecture.png",
    "revision": "95b404519be00be96aee8a24e26aa98c"
  },
  {
    "url": "img/gif.gif",
    "revision": "1a0c1e3cc3a43b6868dbbfb7c171fdb9"
  },
  {
    "url": "img/Hashicorp Vault CHIP Virtual Bootcamp.png",
    "revision": "5b0b6ad17f3ce5bde0cdff5f0b1d52ea"
  },
  {
    "url": "img/HashiCorp__Consul.png",
    "revision": "139dd7f37350aa0b70b8b2e7e91414b4"
  },
  {
    "url": "img/HashiCorp__Nomad.png",
    "revision": "cf122e8038a91c9feebdcf87606e4e8d"
  },
  {
    "url": "img/HashiCorp__Terraform.png",
    "revision": "3d0d614841921f7f882884210ea96e8f"
  },
  {
    "url": "img/HashiCorp__Vault.png",
    "revision": "822c904c09e07eb6da124689dbbee8c5"
  },
  {
    "url": "img/hashicorp-and-bitrock-sign-strategic-partnership.png",
    "revision": "06e675e77f23041491ae9c0e4f08c0d1"
  },
  {
    "url": "img/HashiCorp.png",
    "revision": "4ed98e5a5e65528c97bb771478f1f8b9"
  },
  {
    "url": "img/Interview.jpeg",
    "revision": "b295b9a444ede63640fa77ff82c5e553"
  },
  {
    "url": "img/java.png",
    "revision": "989f472c5651edc4fffac0811a2f9013"
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
    "url": "img/kafka.png",
    "revision": "0f45e4f21981077ceeca11a5d530eedc"
  },
  {
    "url": "img/kubernetes-logo.png",
    "revision": "e8d54c126a34a837108e95dc5c8f1db6"
  },
  {
    "url": "img/Lambda.jpg",
    "revision": "c12d34153a55e19d2a786f28fc88d805"
  },
  {
    "url": "img/let-s-stayhome-but-let-s-stayhuman-too-1.jpg",
    "revision": "3b10c565efbadaba136d50837b22d140"
  },
  {
    "url": "img/lightbend-logo.png",
    "revision": "0aa5a8732ced17d002114140f491d546"
  },
  {
    "url": "img/lightbend.png",
    "revision": "0aa5a8732ced17d002114140f491d546"
  },
  {
    "url": "img/main_bg.jpg",
    "revision": "649437e10c225f97051bf42c1fa2a45b"
  },
  {
    "url": "img/monitoring-kafka-connector-with-kubernetes.png",
    "revision": "5b1b764bf0d1bd18f14820bb885694ff"
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
    "url": "img/polymorphic-messages-in-kafka-streams.png",
    "revision": "a50609f38de3498785f88ba38d8dda09"
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
    "url": "img/prometheus_logos.png",
    "revision": "f53d285a1ccd879a5441e3d77ce605f0"
  },
  {
    "url": "img/prometheus-exporter-loghi-1.png",
    "revision": "fb0057545825f9faf32850004c7d9b30"
  },
  {
    "url": "img/prometheus-schema-1.png",
    "revision": "775b15d9187aed4c954b24dac67828b4"
  },
  {
    "url": "img/prometheus.png",
    "revision": "a747ecb040a85aa85bd0f57917d590de"
  },
  {
    "url": "img/radicalbit.png",
    "revision": "ea78f9a4da40988736ba95963230aac0"
  },
  {
    "url": "img/react-logo.png",
    "revision": "1aa282c2ed220c3d21dd7467f0e07d2b"
  },
  {
    "url": "img/react-push-based-architecture.png",
    "revision": "15436ecf7201ef6522575f90baef3236"
  },
  {
    "url": "img/react.png",
    "revision": "14c89a41e5154b4a2920df0115337ad5"
  },
  {
    "url": "img/Reactive Supply Chain.jpg",
    "revision": "9c05623d7303f771eb3be06323819cea"
  },
  {
    "url": "img/s_1.png",
    "revision": "7be5f63fa504d7c26f8dd688266919a6"
  },
  {
    "url": "img/s_10.png",
    "revision": "236dbcf30603146fd0490a6afa1c3f01"
  },
  {
    "url": "img/s_2.png",
    "revision": "979f7e25c8c659181392e00ee2300c2a"
  },
  {
    "url": "img/s_3.png",
    "revision": "d3d0be588f6064fa1ae6b66363e8d224"
  },
  {
    "url": "img/s_4.png",
    "revision": "ac4b669ca9b7f674c20a961c5af736e1"
  },
  {
    "url": "img/s_5.png",
    "revision": "5d45732a25084551b48ecaa11776fd32"
  },
  {
    "url": "img/s_6.png",
    "revision": "582ddbbb6653dd15c8333b42fe5401a8"
  },
  {
    "url": "img/s_7.png",
    "revision": "621d4541ea204f80a31df6b0cb394eb0"
  },
  {
    "url": "img/s_8.png",
    "revision": "457b373f29fd088c121c8781d2d47247"
  },
  {
    "url": "img/s_9.png",
    "revision": "3d06a53eb67819bfdc518e8c830085b8"
  },
  {
    "url": "img/s-1.png",
    "revision": "089ccde1d6165ad9eebbadb8ce36383d"
  },
  {
    "url": "img/s-2.png",
    "revision": "ce73d602dcb9113a10cd1d0c1ca1d252"
  },
  {
    "url": "img/s-3.png",
    "revision": "9fc137b9c9f53ad4aa370ed14ec446b9"
  },
  {
    "url": "img/scala-logo.gif",
    "revision": "025e09621c43632cbf252ec87c1a4627"
  },
  {
    "url": "img/scala.png",
    "revision": "781017681230fe3cb11c43ec9cfc5ee3"
  },
  {
    "url": "img/schema_prometheus.png",
    "revision": "ea4b9eecc2ff44f28df0936c40e31a05"
  },
  {
    "url": "img/schema-3.png",
    "revision": "87d6ed6321ddfcc6ec5b614468739190"
  },
  {
    "url": "img/schema-4.png",
    "revision": "2aba395423562bbf88c05d73dd8bb182"
  },
  {
    "url": "img/schema.png",
    "revision": "5d3c3a34f47139f307d4f22019131165"
  },
  {
    "url": "img/schermata-2020-07-23-alle-15-14-21.png",
    "revision": "dad5d9f7b7f1e76352e7116c380781df"
  },
  {
    "url": "img/schermata-2020-07-23-alle-15-14-36.png",
    "revision": "ca9d70610dcf5915299ba21c5f48e2d3"
  },
  {
    "url": "img/schermata-2020-10-12-alle-09-59-35.png",
    "revision": "3a5eef33e60a57b89ed697a920fc6e9e"
  },
  {
    "url": "img/schermata-2020-10-12-alle-10-00-56.png",
    "revision": "b2ddd6160071acdf50c86ad5225dcb17"
  },
  {
    "url": "img/schermata-2020-10-12-alle-10-02-13.png",
    "revision": "b0cca772f5c7f83dc120a9948eb5065a"
  },
  {
    "url": "img/schermata-2020-10-12-alle-10-02-22.png",
    "revision": "20e010133d87b57e0d3a13196edccb16"
  },
  {
    "url": "img/schermata-2020-10-12-alle-15-37-50.png",
    "revision": "38dcf0d741c049fd0160f03aeb56a2ac"
  },
  {
    "url": "img/schermata-2020-10-13-alle-11-04-46.png",
    "revision": "4324b1a9a681dc3a7b06662781978123"
  },
  {
    "url": "img/Space Lions_csr.jpeg",
    "revision": "70ae6a94a8a22380dbfbb4f89ddf6408"
  },
  {
    "url": "img/spark-logo.png",
    "revision": "916d2eb13537b5286898c3fa29ef8312"
  },
  {
    "url": "img/terraform-community-tools-1.png",
    "revision": "dcba31bb91233cdbcdf699e17917441f"
  },
  {
    "url": "img/terraform-community-tools.png",
    "revision": "bf27f468de62fc5cb15ed3fbd7cb9492"
  },
  {
    "url": "img/the-jamstack-proposition.png",
    "revision": "b7e8563b7c21fe0826d20e0c1f6b3fba"
  },
  {
    "url": "img/u_1.png",
    "revision": "71d717991dac57709e0acbd0e5268547"
  },
  {
    "url": "img/u_2.png",
    "revision": "54e83d9adb733259f6635aed97e2d55b"
  },
  {
    "url": "img/u_3.png",
    "revision": "8c32b1c49b265f839cc780a0d9fd10cc"
  },
  {
    "url": "img/u_4.png",
    "revision": "1e5fd0d86c413531f004b00b42d006c6"
  },
  {
    "url": "img/u_5.png",
    "revision": "65d9fe88323032fef04b9846b9324790"
  },
  {
    "url": "img/u_6.png",
    "revision": "a69da6c08b89d17bedc60c109a10133e"
  },
  {
    "url": "img/u-1.png",
    "revision": "0c8ad85d303e7509c4e39ebedad3f071"
  },
  {
    "url": "img/u-2.png",
    "revision": "3aa74c52c6eef740f2157b91d5ef6ca1"
  },
  {
    "url": "img/u-3.png",
    "revision": "2914052df155423554ec0c1eb34e9a8f"
  },
  {
    "url": "img/u-4.png",
    "revision": "65dba3d0e949dfcbf8e706d1b547a379"
  },
  {
    "url": "img/u-5.png",
    "revision": "255c6294da1320e24d8dfb06480578e4"
  },
  {
    "url": "img/u-6.png",
    "revision": "e3ab63c8b1e2cee4be878ad811d250cb"
  },
  {
    "url": "img/u-7.png",
    "revision": "409f1e9ebd020b4f4abf1774bc9dedf7"
  },
  {
    "url": "img/u-8.png",
    "revision": "9e32ef3099389c283e4691f1b98e6877"
  },
  {
    "url": "img/Virtual Office.jpg",
    "revision": "55cb9784365b09d7eb21e1e5e3d0b815"
  },
  {
    "url": "img/vue-logo.jpg",
    "revision": "d3fce5d5845c3f2d3298ea6027475028"
  },
  {
    "url": "img/vue.png",
    "revision": "5a5cf3f6b525c313438fceccbebaa4a8"
  },
  {
    "url": "img/waves.png",
    "revision": "a0f9138cd350c3daae501dbdf218533b"
  },
  {
    "url": "img/wc-logo.png",
    "revision": "e6ae077d9658b5d4c5d18aa1a81a5641"
  },
  {
    "url": "img/what_is_information_technology.jpg",
    "revision": "f3e1325c37cdab8b8aa6db7f630d51d6"
  },
  {
    "url": "index.html",
    "revision": "39cb5c4961f9e7d2befe8083c61a9b6c"
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
    "revision": "6b709422644baa2d71a6024afcac39bb"
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
