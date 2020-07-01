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
    "revision": "1997e07e19e352e2543a9ca5ce8528ed"
  },
  {
    "url": "assets/css/0.styles.582d04de.css",
    "revision": "505d68109b9b3fe13dd0c5dc3e63c69b"
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
    "url": "assets/js/10.c00aa2df.js",
    "revision": "881243bab48bd594dc0c530f75f95efc"
  },
  {
    "url": "assets/js/11.5d36fdc5.js",
    "revision": "f1379255062f3ae2121336272203c6e5"
  },
  {
    "url": "assets/js/12.62c51ae8.js",
    "revision": "e5b42cc2dab7ad341a3815a0fa94e37e"
  },
  {
    "url": "assets/js/13.49dc5e3b.js",
    "revision": "9019d9e45d5d3cfbc0f109ba896e2f7a"
  },
  {
    "url": "assets/js/14.85b6c6d5.js",
    "revision": "af2d9bfe44d3ed111e8a4a99c4e02133"
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
    "url": "assets/js/25.a2944950.js",
    "revision": "d5d3df867f002f7e7ad8be6be3338ebe"
  },
  {
    "url": "assets/js/26.4e22fbf5.js",
    "revision": "266676e7cabe1c7c3bab1d27fb1f188a"
  },
  {
    "url": "assets/js/27.eede9219.js",
    "revision": "71e385b1f3537e18afd1a8a14fddbfdb"
  },
  {
    "url": "assets/js/28.b2b554e2.js",
    "revision": "c9aed1e7d41c85e2dbb01d8dcd0c163e"
  },
  {
    "url": "assets/js/29.34c5fd29.js",
    "revision": "317cfd364dde7b7cf22090d2598f4712"
  },
  {
    "url": "assets/js/3.1c962e0e.js",
    "revision": "26cdb4d0af037ad28d68269e318fe0c0"
  },
  {
    "url": "assets/js/30.5b2f4eee.js",
    "revision": "60057f5ffe319e7140efb90ca1a1ddd4"
  },
  {
    "url": "assets/js/31.5ba768f2.js",
    "revision": "858fd2d610098817801e11a1560e5163"
  },
  {
    "url": "assets/js/32.36a05f10.js",
    "revision": "d9d763ed8c3f2e3cfb2b3d3e600337b5"
  },
  {
    "url": "assets/js/33.1bcb78b4.js",
    "revision": "9b92c5e2230ae9800541e3419678554f"
  },
  {
    "url": "assets/js/34.47468578.js",
    "revision": "066835f2bacde040d1d5f81611884f03"
  },
  {
    "url": "assets/js/4.187cc577.js",
    "revision": "2804977b6f528fe10aeba075be6c746c"
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
    "url": "assets/js/7.2d5e25ad.js",
    "revision": "34438d6fc8839de8e506b8c7bd4b32bc"
  },
  {
    "url": "assets/js/8.a0c440f3.js",
    "revision": "9859da218a07f756684ffb55362da5d6"
  },
  {
    "url": "assets/js/9.91369f7b.js",
    "revision": "4b07be96cd63980f800b631ff33efecf"
  },
  {
    "url": "assets/js/app.6bd53a1d.js",
    "revision": "53683f56d274e0b4629b49f5801c7ceb"
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
    "revision": "7c30625e8ffa49f0b031ee7478e342cc"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "132c4cfadbeacd6464e4c4b694f9195f"
  },
  {
    "url": "blog/Bitrock DevOps Team joining HashiCorp EMEA Vault CHIP Virtual Bootcamp/bitrock-devops-team-joining-hashicorp-emea-vault-chip-virtual-bootcamp.html",
    "revision": "d9810cfcc17197457578c8c462b1ed22"
  },
  {
    "url": "blog/bitrock-rooms-a-ux-ui-project-to-face-covid-19-challenges.html",
    "revision": "d245cb0b207b0bcdfd27fc2b5d66ae8a"
  },
  {
    "url": "blog/bitrock-virtual_office-journal.html",
    "revision": "2bc0a859ced53b93d1052564ae996445"
  },
  {
    "url": "blog/ByteConfReact_2020 - Claudia Bressi/byteconf-2020-claudia-bressi-frontend-developer-bitrock-among-main-speakers.html",
    "revision": "858be6b80ffa10bd43ff73e48b88e58c"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "ec9f0650a5fb2c5f77e3241d547d5654"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "d8367c28048186170c2241f8e001217e"
  },
  {
    "url": "blog/HashiCorp and Bitrock sign partnership to boost IT infrastructure innovation/hashicorp-and-bitrock-sign-partnership-to-boost-it-infrastructure-innovation.html",
    "revision": "7da8b03c0b3374432fd9969f886169c0"
  },
  {
    "url": "blog/index.html",
    "revision": "9082a53a6b383409839802a7bfd3e160"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "e37a301f27d8ec82a88e67b029530165"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "ba0ef5e436412f29d86829ec4779ee00"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "e5ac610f99671bdcbf95d8cca7a0e887"
  },
  {
    "url": "blog/Life@Bitrock in the Covid-19 Era/life-bitrock-in-the-covid-19-era.html",
    "revision": "b9a8c69b67881b69e2579857da294856"
  },
  {
    "url": "blog/react-bandersnatch-experiment-getting-close-to-a-real-framework.html",
    "revision": "e93937433dbc2e8065e30bcc460138e6"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "4069bd8cf1b70f5f0e7eb004a01bb8aa"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "acbd48f2d7fda99265e2413bc578f170"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "30c7c74656b7b15f3fc172bd65ed7c55"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "7adb4aa4463897e119e84de967b03f73"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "6ab55cfb509cb3500c9473412291afd0"
  },
  {
    "url": "blog/Turning Data at REST into Data in Motion with Kafka Streams - Confluent Blog/turning-data-at-rest-into-data-in-motion-with-kafka-streams-confluent-blog.html",
    "revision": "085f6ca293890c5bba156f118d67b9b8"
  },
  {
    "url": "discover/index.html",
    "revision": "6f58e99d54b6050bc0f33f24cb00d179"
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
    "url": "img/1-2.png",
    "revision": "b5d2e8690897688a612781490a353a19"
  },
  {
    "url": "img/1.png",
    "revision": "139cb1ca1078fc5548600490f0b8f170"
  },
  {
    "url": "img/11.jpg",
    "revision": "b046a5bee66bdc4b6ddb1159c78b271b"
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
    "url": "img/3.png",
    "revision": "6091cd3e4b7c0ba074b24a17a238f745"
  },
  {
    "url": "img/4.png",
    "revision": "31c2989918ed259584b78580c89e36ef"
  },
  {
    "url": "img/5.png",
    "revision": "16ecad2d508ea097a77493e9daf29541"
  },
  {
    "url": "img/6.png",
    "revision": "21b5c84d3d18fb29cf8c5506c398dc94"
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
    "url": "img/radicalbit.png",
    "revision": "ea78f9a4da40988736ba95963230aac0"
  },
  {
    "url": "img/react-logo.png",
    "revision": "1aa282c2ed220c3d21dd7467f0e07d2b"
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
    "url": "img/scala-logo.gif",
    "revision": "025e09621c43632cbf252ec87c1a4627"
  },
  {
    "url": "img/scala.png",
    "revision": "781017681230fe3cb11c43ec9cfc5ee3"
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
    "revision": "f75aebf60eca8889c4ff6b92821cde33"
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
