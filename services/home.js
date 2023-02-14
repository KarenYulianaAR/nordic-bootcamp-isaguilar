const restclient = require('nordic/restclient')({
    timeout: 5000,
    
})

class ServiceHome{
    static getProducts(siteId, search, limit, offset){
        return restclient.get(`/sites/${siteId}/search`,{
            params: {
                q: search,
                limit: limit || 5,
                offset: offset || 5,
            }
        })
        .then((resp) => resp.data);
    }
}

module.exports= ServiceHome;