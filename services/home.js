const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: "https://api.mercadolibre.com",
})

class ServiceHome{
    static getProducts(siteId, search, limit){
        return restclient.get(`/sites/${siteId}/search`,{
            params: {
                q: search,
                limit: limit || 5,
            }
        })
        .then((resp) => resp.data);
    }
}

module.exports= ServiceHome;