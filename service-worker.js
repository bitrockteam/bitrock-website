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
    "revision": "197c51464b8a9d142248951b77805579"
  },
  {
    "url": "academy/index.html",
    "revision": "73516c4d02652399aa72978362e1a8b2"
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
    "url": "assets/js/10.a820c226.js",
    "revision": "6379e9ca74cbb00c85bbdb0487513456"
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
    "url": "assets/js/13.db8bab7f.js",
    "revision": "0de9645db3b13ea5309c8548803c1979"
  },
  {
    "url": "assets/js/14.4be808c7.js",
    "revision": "cad20e7117bad4ec3658082232487b62"
  },
  {
    "url": "assets/js/15.b7c760f1.js",
    "revision": "643a26385707823b08eda5dba000fc27"
  },
  {
    "url": "assets/js/16.d2e8bcc4.js",
    "revision": "1e0fedc61a9837d8eff09e90fbda1bfc"
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
    "url": "assets/js/19.439c3f7c.js",
    "revision": "58ae8b00bd62437611f040f1b0125174"
  },
  {
    "url": "assets/js/2.1c673335.js",
    "revision": "2749948ea9c71fbf58f291390852503a"
  },
  {
    "url": "assets/js/20.9924d09d.js",
    "revision": "bed8570b39a51176b605fedcbbaf66f3"
  },
  {
    "url": "assets/js/21.029af4e6.js",
    "revision": "2f6328298e0d810657da8c8242bfc9b2"
  },
  {
    "url": "assets/js/22.9da75086.js",
    "revision": "e713d7c2ea681b6096f844f836ee15e0"
  },
  {
    "url": "assets/js/23.29feb123.js",
    "revision": "7db56d2ed6095b789d213773e73b9090"
  },
  {
    "url": "assets/js/24.41deda1d.js",
    "revision": "6038083fe8144108fcaeabda4964947b"
  },
  {
    "url": "assets/js/25.4e9ad200.js",
    "revision": "d268584cee280635cb0085540120aefe"
  },
  {
    "url": "assets/js/26.fc9797fe.js",
    "revision": "a5145ba8db451c131ba64f869bcbddb7"
  },
  {
    "url": "assets/js/27.4a25fd34.js",
    "revision": "ade5eb2085d71fd19a9087c2b34c35cd"
  },
  {
    "url": "assets/js/28.48828962.js",
    "revision": "45efad89c98b8db92570f0243f0b035e"
  },
  {
    "url": "assets/js/29.55a6532e.js",
    "revision": "9ee4ab45b6a2188c1a0cda0f4edb28d1"
  },
  {
    "url": "assets/js/3.7f8e1b8e.js",
    "revision": "69e1b70666a76eb1aea6512ddb83ab95"
  },
  {
    "url": "assets/js/4.5d27b9f9.js",
    "revision": "3f8dd597ed903a58b944fe9877087c33"
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
    "url": "assets/js/7.fe837b26.js",
    "revision": "835410088405ec01cd65cf97f19e9843"
  },
  {
    "url": "assets/js/8.8161d303.js",
    "revision": "0d96799c21a705960511c900cbb59a7d"
  },
  {
    "url": "assets/js/9.303d27da.js",
    "revision": "beffb97f542c53d2540bad10496128c4"
  },
  {
    "url": "assets/js/app.96f755b2.js",
    "revision": "784da3dbfd8f540f1bcbbe36b07c6cfc"
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
    "revision": "5b9a3aaa77bc07b1b28a5521c4faa3bc"
  },
  {
    "url": "blog/academy-kafka-operations/index.html",
    "revision": "b657a7958d58720abf0f680000265643"
  },
  {
    "url": "blog/academy-kafka-solutions/index.html",
    "revision": "6b169a32e4e8f31ec8a369ec1c64d637"
  },
  {
    "url": "blog/academy-lightbend/index.html",
    "revision": "158f760b21889b4e5770801a08d9113c"
  },
  {
    "url": "blog/codemotion-milan-2018/index.html",
    "revision": "da376e3b73c9ddbd6e29f48a88805721"
  },
  {
    "url": "blog/corporate-event-2018/index.html",
    "revision": "ff2897c606d3d0a37b482f556e3dbfaa"
  },
  {
    "url": "blog/cto-takeaways/index.html",
    "revision": "0e91d8caa80cdf0be9985701c251ddbe"
  },
  {
    "url": "blog/databiz-group/index.html",
    "revision": "83fd1fc8a211690d520c1785f450f974"
  },
  {
    "url": "blog/devops-team/index.html",
    "revision": "dc063aee7d0576776864470122f05655"
  },
  {
    "url": "blog/event-driven-review/index.html",
    "revision": "3a3976bd4507d182733c0c930e6af7f4"
  },
  {
    "url": "blog/interview-marco-stefani/index.html",
    "revision": "5cf0d788685ee004e7b708e18878ad87"
  },
  {
    "url": "blog/interview-salvatore-laisa/index.html",
    "revision": "844247bc4fd6f6902a527e7f26d8db13"
  },
  {
    "url": "blog/kubernetes-fastlane/index.html",
    "revision": "d38988d5b5da6e9c92e3e8ea7600b9de"
  },
  {
    "url": "blog/reactive-corporate-chat/index.html",
    "revision": "c3011680e9d68321453ab85d97cc21c5"
  },
  {
    "url": "blog/reactive-supply-chain/index.html",
    "revision": "660f01f841c4de3268608304560f10a9"
  },
  {
    "url": "blog/scala-italy-2018/index.html",
    "revision": "d1f0d0cb63e920dd57de3df57081007a"
  },
  {
    "url": "blog/space-lions/index.html",
    "revision": "c10a3736ac8b79585784624f7d80a274"
  },
  {
    "url": "blog/technology-infrastructure-summit-2018/index.html",
    "revision": "6ff2358c6e90fcf86d1341231df990c2"
  },
  {
    "url": "discover/index.html",
    "revision": "f539c69e0df94d85ae813853d5986ff3"
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
    "revision": "91a7c9b99222a8a6634b7f5f0deda380"
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
