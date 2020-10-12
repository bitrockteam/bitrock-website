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
    "revision": "a4e2a33989f213c34310cda0fd43a266"
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
    "url": "assets/js/11.c983feec.js",
    "revision": "c08be66f6cf9bbca29d443f9d69d57cb"
  },
  {
    "url": "assets/js/12.09d69e0b.js",
    "revision": "c66cb38248b21473c9839600a8fe2df1"
  },
  {
    "url": "assets/js/13.5c30a5b3.js",
    "revision": "7e93fd6135ceba4903d2c4e79455c7cc"
  },
  {
    "url": "assets/js/14.efc2fc62.js",
    "revision": "45e8f7af301aa06fe6839d679d8c2336"
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
    "url": "assets/js/17.9f6429c8.js",
    "revision": "5e3788daea6e7825432d8af998c946d1"
  },
  {
    "url": "assets/js/18.ce0232e8.js",
    "revision": "16836400f282c32dd45f386de5339b31"
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
    "url": "assets/js/29.828dfc6f.js",
    "revision": "7e9879a6b2fd084148ed1a64765dda80"
  },
  {
    "url": "assets/js/3.44cb95ca.js",
    "revision": "da4a78b4b2904db48a193566d2ce2ed1"
  },
  {
    "url": "assets/js/30.fb8369ce.js",
    "revision": "0ea4227e536db873a01f362b687880da"
  },
  {
    "url": "assets/js/31.787c1528.js",
    "revision": "9a5745a989a35fbfcfcbc29fd1aab959"
  },
  {
    "url": "assets/js/32.dc59d5f2.js",
    "revision": "84bd5cff2b29aab9ae6693679dffad34"
  },
  {
    "url": "assets/js/33.fdb02fca.js",
    "revision": "b5520c4eebf69e3d1f16f5ada2fe44e4"
  },
  {
    "url": "assets/js/34.6553f34d.js",
    "revision": "b33c914d46a8396096bbed843a0d9608"
  },
  {
    "url": "assets/js/35.bd6e0931.js",
    "revision": "827bd97a940c25a0d210faaf43dc0ab2"
  },
  {
    "url": "assets/js/36.41b719a2.js",
    "revision": "1d6cd2e0d44b6887abdee14375f9a788"
  },
  {
    "url": "assets/js/37.85b41d5d.js",
    "revision": "d3746c0b8dfa5e2bc6c82eb158584f51"
  },
  {
    "url": "assets/js/38.a841c952.js",
    "revision": "01c66494a28d5a23793d10159ae80795"
  },
  {
    "url": "assets/js/39.4d8923ea.js",
    "revision": "a76d9dad72c513c4dccab8b98083f209"
  },
  {
    "url": "assets/js/4.187cc577.js",
    "revision": "2804977b6f528fe10aeba075be6c746c"
  },
  {
    "url": "assets/js/40.2a8f1716.js",
    "revision": "b3d9cad1efddba2d0dfe041a98b952f8"
  },
  {
    "url": "assets/js/41.0b9b36f6.js",
    "revision": "f18274a2eeb20e1f77181ccff846193e"
  },
  {
    "url": "assets/js/42.f2e0a509.js",
    "revision": "eb10c5e54393611c27caa3381d1fe209"
  },
  {
    "url": "assets/js/43.803b33e9.js",
    "revision": "9177149b21ca84f59fbeb8b7873125e2"
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
    "url": "assets/js/app.eb6f622b.js",
    "revision": "32cbc82fc674b890dcd3264b639d1fc2"
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
    "revision": "1336712b31799f15c769302d48138113"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "2b99f9a4cd2ce83dbd038680fa8e3c3f"
  },
  {
    "url": "blog/an-introduction-to-deno.html",
    "revision": "bc2e1ff8149802fdc75a76136f346ad4"
  },
  {
    "url": "blog/Bitrock DevOps Team joining HashiCorp EMEA Vault CHIP Virtual Bootcamp/bitrock-devops-team-joining-hashicorp-emea-vault-chip-virtual-bootcamp.html",
    "revision": "8e74818cd9904a44c282edd889aa477b"
  },
  {
    "url": "blog/bitrock-rooms-a-ux-ui-project-to-face-covid-19-challenges.html",
    "revision": "602989909ae9780df417a74b46babab1"
  },
  {
    "url": "blog/bitrock-virtual_office-journal.html",
    "revision": "1e401f2090a5fb4849d5be8193248ec3"
  },
  {
    "url": "blog/bringing-gdpr-in-kafka-with-vault.html",
    "revision": "7c3e38d0647d6f9932159890dfd4368d"
  },
  {
    "url": "blog/ByteConfReact_2020 - Claudia Bressi/byteconf-2020-claudia-bressi-frontend-developer-bitrock-among-main-speakers.html",
    "revision": "7ccb5167f80bde15782c233b8a27bc88"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "7eb3cff9168349243b744ae0d1f57ebe"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "2467cdc218415e8a07fe538e5ff236e3"
  },
  {
    "url": "blog/from-layered-to-hexagonal-architecture-hands-on.html",
    "revision": "89e6603a28aba51fcc1b8fb11b5ab17e"
  },
  {
    "url": "blog/getting-started-with-prometheus.html",
    "revision": "e930166da0dd371dddf9f43f047378e9"
  },
  {
    "url": "blog/getting-started-with-react-push-based-architecture.html",
    "revision": "33e7e2656b460882787b7d64502f3502"
  },
  {
    "url": "blog/HashiCorp and Bitrock sign partnership to boost IT infrastructure innovation/hashicorp-and-bitrock-sign-partnership-to-boost-it-infrastructure-innovation.html",
    "revision": "66e993dd5a8b356ce009d0d479c9c3a5"
  },
  {
    "url": "blog/index.html",
    "revision": "ffa06e4f844738e31a4dac50ab839d16"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "856a5d4217b1a4ebf2cd41dd73417612"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "1aa79e5742e369edeec71295e4a3e439"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "0652ee4c25b096822cfb1bdb9fa57bd3"
  },
  {
    "url": "blog/Life@Bitrock in the Covid-19 Era/life-bitrock-in-the-covid-19-era.html",
    "revision": "bd08baa694178600858b1081e2487d47"
  },
  {
    "url": "blog/monitoring-kafka-connector-with-kubernetes.html",
    "revision": "2cce35db1b643bb791de2575f52f791f"
  },
  {
    "url": "blog/polymorphic-messages-in-kafka-streams.html",
    "revision": "40b532baff27dcf1e48aa769210d868e"
  },
  {
    "url": "blog/react-bandersnatch-experiment-getting-close-to-a-real-framework.html",
    "revision": "807372988b809f7c8975feedcec99a7f"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "9cab0cb1de8665fb22cb4e2f0b99c5fd"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "c8693c0f412577c515fd70088a8ad629"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "2849a393d372606f1695d59395afe618"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "5dd2bed41e201ab4c463fb8977928e5c"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "bad3375450894a14036021f39d435581"
  },
  {
    "url": "blog/terraform-community-tools.html",
    "revision": "0576e16b4632254639654c71cd044ac3"
  },
  {
    "url": "blog/the-jamstack-proposition.html",
    "revision": "36919234cf13720359738b8838745b92"
  },
  {
    "url": "blog/Turning Data at REST into Data in Motion with Kafka Streams - Confluent Blog/turning-data-at-rest-into-data-in-motion-with-kafka-streams-confluent-blog.html",
    "revision": "6ce70d1d78f7a1a4d3587523260c8aa6"
  },
  {
    "url": "discover/index.html",
    "revision": "44e5c3787a71a8fd55e6bbc9a1209b0d"
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
    "url": "index.html",
    "revision": "62ba41c09de5f6fb3795ca455f65487e"
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
