const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-js-pr-ctica-sitio-web'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-js-pr-ctica-sitio-web-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-js-pr-ctica-sitio-web'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-js-pr-ctica-sitio-web-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-js-pr-ctica-sitio-web'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-js-pr-ctica-sitio-web-production'
  }
};

module.exports = config[env];
