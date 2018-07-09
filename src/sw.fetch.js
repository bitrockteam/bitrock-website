importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

workbox.routing(
  new RegExp('/api.bitrock.it/'),
  workbox.strategies.networkFirst()
);