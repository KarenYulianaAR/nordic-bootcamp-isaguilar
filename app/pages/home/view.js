const React = require('react');

const View = (props) =>{
    const { title, products } = props;
    const { results } = products;

    return(
       <>
             <h1>{ title }</h1>
             <ul>
                {
                    results.map((product) => {
                        return (
                        <li>{product.title}</li>
                        )
                    })
                }
            </ul>
       </>
    )
}

module.exports = View;