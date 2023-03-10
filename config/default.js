/// <reference types="nordic"/>

const { version } = require('../package.json');

/** @type {Nordic.Config} */
module.exports = {
  ragnar: {
    version,
    basePath: '/',
    server: {
      port: 8080,
      securePort: 8443,
      host: '0.0.0.0',
      static: './build',
    },
  },
  i18n: {
    app: 'i18n-demo',
    srcPath: `${__dirname}/../app`,
  },
  assets: {
    prefix: '/',
  },
  polyfillLimits: {
    defaultBrowsers: true, // Can be changed to have browser-specific versions
  },
};
