
const httpServerPwa = require('http-server-pwa');
const isProd = require('./envs').isProd;

const port = isProd() ? process.env.PORT : 8080;
const debug = !isProd();

const server = httpServerPwa('./dist', {
  p: port, d: debug
});