import ProductItem from './ProductItem'

function ProductList(props){

    return(
        <section>
            <h1>LES PRODUITS</h1>
            <p>Il y a { props.items.length } produits dans la boutique.</p>
            <ul className="product-list">
                {
                    props.items.map( (item) => {
                        
                        return (
                            <li key={ item.id }>
                                <ProductItem 
                                    item={ item }
                                    addFunction={ props.addFunction }
                                    />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default ProductList