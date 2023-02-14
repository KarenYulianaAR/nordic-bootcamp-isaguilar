const router= require('nordic/ragnar').router();
const Service = require('../services/home');

router.get('/', (req, res) => {
    const { siteId, q, limit, offset } = req.query;

    Service.getProducts(siteId, q, limit, offset)
        .then( resp => res.json(resp))
        .catch(( err ) => console.log(err))
})

module.exports = router;