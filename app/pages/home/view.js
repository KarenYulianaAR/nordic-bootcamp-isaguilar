const React = require('react');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const { useState, useEffect } = React;
const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api',
})

//const View = (props)=>{
const View = ({ title, products, products: { results: res }, queryParam}) => {
    //const { title, products } = props
    // const { results } = products;
    //console.log(products)

    const { site_id } = products;
    const { limit } = products.paging;
    console.log(site_id)

    const preloadedState = {
        title,
        products,
        queryParam
    }

    const [list, setLIst] = useState(res);
    const [page, setPage] = useState(1);

    useEffect(() => {

        restclient.get('/getProducts', {
            params: {
                q: queryParam,
                limit: limit,
                offset: (page - 1) * 5,
                siteId: site_id
            }
        })

            .then(({ data }) => {
                setLIst(data.results)
            })
            .catch((err) => console.log(err))

    }, [page]);

    const handlePage = () => {
        console.log('Cambio de pagina', page)

        setPage((prev) => prev + 1)
    }

    return (
        <>
            <section>
                {/* Carga las props del componente de la View en el cliente */}
                <Script>
                    {`
                    window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })}
                    console.log('%cHome page is connected', 'color: green')
                `}
                </Script>
                {/**esto funciona asi porque le declaramos el entry point en el webpack */}
                {/* Carga las dependencias en el cliente ej React */}
                <Script src="vendor.js" />
                {/* Carga el archivo de la page en el navegador del usuario */}
                <Script src="home.js" />
            </section>
            <section>
                <h1>{title}</h1>
                <ul>
                    {
                        list?.map((product) => {
                            return (
                                <li key={product.id}>{product.name}</li>
                            )
                        })
                    }
                </ul>
            </section>
            <section>
                    <button onClick={()=> setPage((prev) => prev -1)}>Anterior</button>
                    <h4>{page}</h4>
                    <button onClick={handlePage}>Siguiente</button>
            </section>

        </>
    )
}

module.exports = View;