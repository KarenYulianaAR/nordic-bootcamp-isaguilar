const React = require('react');
const View = require('./view');
const Service = require('../../../services/home');

exports.getProducts = function getProducts(req, res, next){
    const { siteId } = req.platform;
    const { search, limit } = req.query;

    Service.getProducts(siteId, search, limit)
        .then((resData)=>{
            res.locals.products = resData;
            next()
        })
        .catch((err)=> next(err));
}

exports.render = function render(req, res){
    
    const HomeView = props => <View {...props}/>

    res.render(HomeView, {
        title: 'Una nueva page guachin',
        products: res.locals.products,
    })
}