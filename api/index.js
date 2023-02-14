/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const demo = require('./demo');
const products = require('./getProducts');

/**
 * Demo router
 */
router.use('/demo', demo);
router.use('/getProducts', products);

/**
 * Expose API router
 */
module.exports = router;
