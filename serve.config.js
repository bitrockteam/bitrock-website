const path = require('path');

const { isProd, envs, env } = require('./scripts/envs.js');

module.exports = {
  mode: isProd ? envs.production : envs.development,
  port: 8080,
  content: path.join(__dirname, 'dist')
}