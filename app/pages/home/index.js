const router = require('nordic/ragnar').router();
const { getProducts, render } = require('./controller');

//https://dev.mercadolibre.com.uy:8443/home?search=celular&limit=3
router.get('/', getProducts, render);

module.exports= router;