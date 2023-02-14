const React = require('react');
const View = require('../pages/home/view');
const hydrate = require('nordic/hydrate');

const { title, products, queryParam } = window.__PRELOADED_STATE__;

/**
 * render()
 * createRoot(), hydrateRoot()
 * hydrate -> hidrata el codigo HTML con codigo JS para que nuestra
 * pagina pueda responder ante eventos provocados por el usuario.
 * Los parametros que le paso a la view mediante el hydrate, persistiran en la vista
 */
hydrate(
    <View 
        title= {title}
        products = {products}
        queryParam = {queryParam}
    />,
    document.getElementById('root-app')
)
