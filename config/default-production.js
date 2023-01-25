/// <reference types="nordic"/>

const pkg = require('../package.json');
const { APPLICATION } = process.env;

/** @type {Nordic.Config} */
module.exports = {
  assets: {
    prefix: `https://http2.mlstatic.com/frontend-assets/${APPLICATION || pkg.name}/`,
  },
};
