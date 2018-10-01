
const httpServerPwa = require('http-server-pwa');
const isProd = require('./envs').isProd;

const port = process.env.PORT || 8080;
const debug = !isProd();
const host = '0.0.0.0';

const server = httpServerPwa('./dist', {
  p: port, d: debug, h: host
});