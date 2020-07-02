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
    "revision": "8a1c5d79128029b5a1956a7765d8bce7"
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
    "url": "assets/js/10.f59a208d.js",
    "revision": "d1f1298457c9048f4fc30b133b2bd7ae"
  },
  {
    "url": "assets/js/11.523bf05a.js",
    "revision": "1eb1fe13796d9d0514eec1ea4e2f3655"
  },
  {
    "url": "assets/js/12.a607be78.js",
    "revision": "9ac5fd157b7ac9e040f1f9d55dd78220"
  },
  {
    "url": "assets/js/13.396b5807.js",
    "revision": "62cf944bae0bdf4a41f6abdc0cd7f9f5"
  },
  {
    "url": "assets/js/14.06daba76.js",
    "revision": "29ce0975b51afb52070650f517d77b1d"
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
    "url": "assets/js/25.0b35ec0c.js",
    "revision": "1827a0324f92bfc06a0ba8c7b13cf4ec"
  },
  {
    "url": "assets/js/26.2d9158d9.js",
    "revision": "38afb49c45bdc1e9e8407fba02eef1b3"
  },
  {
    "url": "assets/js/27.6ecd8c56.js",
    "revision": "d2b06b166a2efd565619a1c56d2a8139"
  },
  {
    "url": "assets/js/28.cdb6eb12.js",
    "revision": "678f3bab051ad75bd5c89e7f338424ad"
  },
  {
    "url": "assets/js/29.0ff0dd4d.js",
    "revision": "be8e4519665e6bbd0c6af02a612a366d"
  },
  {
    "url": "assets/js/3.44cb95ca.js",
    "revision": "da4a78b4b2904db48a193566d2ce2ed1"
  },
  {
    "url": "assets/js/30.7e748663.js",
    "revision": "87b1a00ce218753c3fb779ccb0227397"
  },
  {
    "url": "assets/js/31.68314aa3.js",
    "revision": "d1fdf8346b831c9f7acb3a2758c9d60e"
  },
  {
    "url": "assets/js/32.77b8b5bb.js",
    "revision": "f88ff5733da5a1bd7f18f5963abf349b"
  },
  {
    "url": "assets/js/33.f5012045.js",
    "revision": "ec1b47171bdb6b5efbf40f0762eefa21"
  },
  {
    "url": "assets/js/34.e9eb080d.js",
    "revision": "8a0e379d34f998b4bf4b3d5048e2ae65"
  },
  {
    "url": "assets/js/35.6260e308.js",
    "revision": "55ebae09be31d8bd7bd6288bb41b873b"
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
    "url": "assets/js/7.644bbb73.js",
    "revision": "49674373d90b8666747469806b1bf78f"
  },
  {
    "url": "assets/js/8.fee37db8.js",
    "revision": "45175965cf0e426803e03f9d83d1b907"
  },
  {
    "url": "assets/js/9.91369f7b.js",
    "revision": "4b07be96cd63980f800b631ff33efecf"
  },
  {
    "url": "assets/js/app.895e4ef7.js",
    "revision": "3493964aaf7fc47ffab7ddea0b5b28be"
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
    "revision": "b3b61ba24304bb11a84c8ed839f1f4d7"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "c5020f618574fe57075fedae11db82ff"
  },
  {
    "url": "blog/an-introduction-to-deno.html",
    "revision": "156c318908fc1bda4d23f04c281c417f"
  },
  {
    "url": "blog/Bitrock DevOps Team joining HashiCorp EMEA Vault CHIP Virtual Bootcamp/bitrock-devops-team-joining-hashicorp-emea-vault-chip-virtual-bootcamp.html",
    "revision": "be6303e1c465a92d86abb4b83c10cf0d"
  },
  {
    "url": "blog/bitrock-rooms-a-ux-ui-project-to-face-covid-19-challenges.html",
    "revision": "9945fa55b3d8628fb9e9a1c060363a7e"
  },
  {
    "url": "blog/bitrock-virtual_office-journal.html",
    "revision": "276584f1e3a36c6fdd0e7a7962b71908"
  },
  {
    "url": "blog/ByteConfReact_2020 - Claudia Bressi/byteconf-2020-claudia-bressi-frontend-developer-bitrock-among-main-speakers.html",
    "revision": "77f43a1060097b5fb9b879e0f7356a7c"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "5adb4f3f46c8ee096ce782c2334ae482"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "1ca2027a654fadd8503f0a412286e400"
  },
  {
    "url": "blog/HashiCorp and Bitrock sign partnership to boost IT infrastructure innovation/hashicorp-and-bitrock-sign-partnership-to-boost-it-infrastructure-innovation.html",
    "revision": "c49134dad53a6c27972080701fb2fae6"
  },
  {
    "url": "blog/index.html",
    "revision": "27ef140a9b36f9d57785b6ddcb74eb15"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "373159b15e07ab8c3648f43b3b5d7224"
  },
  {
    "url": "blog/jenkins-world-2018/index.html",
    "revision": "8c246966962359ddb11befa269949ddd"
  },
  {
    "url": "blog/lambda-world-2018/index.html",
    "revision": "e0c43a2c933b4ba0a81835fc52684e81"
  },
  {
    "url": "blog/Life@Bitrock in the Covid-19 Era/life-bitrock-in-the-covid-19-era.html",
    "revision": "9a1a20ba32bbf429b2329a6dff1f89a8"
  },
  {
    "url": "blog/react-bandersnatch-experiment-getting-close-to-a-real-framework.html",
    "revision": "426af878d8cead3e1540cee24e137609"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "cb76102579a3244216e2691a946a5003"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "c75cedd34f02c7f9ce0a7bf3e3ba2e17"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "260f857312f72c0b9f021c53644e413b"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "b82b469dc20dba2038cf97898b040e05"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "9c14a0661d9c54e9ccb9017ba1896d63"
  },
  {
    "url": "blog/Turning Data at REST into Data in Motion with Kafka Streams - Confluent Blog/turning-data-at-rest-into-data-in-motion-with-kafka-streams-confluent-blog.html",
    "revision": "6fe4f17bcc5e970a3a21d3a40b19c40d"
  },
  {
    "url": "discover/index.html",
    "revision": "0e994c4886ddc097993f9c05dd5917e1"
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
    "revision": "a1f3b1e4b6cc004e67523bc901303579"
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
