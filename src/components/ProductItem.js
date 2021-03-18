import { useState } from 'react'

function ProductItem(props){

    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (e) => {
        let val = parseInt(e.target.value)
        let newQtt = quantity+val
        if(newQtt > 0){
            setQuantity(newQtt)
        }
    }

    return(
        <div>
            <h2>{ props.item.name }</h2>
            <p>Produit n°{ props.item.id }</p>
            <p>{ props.item.price.toFixed(2) }&nbsp;€</p>
            <p className="flex-qtt">
                <button onClick={ updateQuantity } value="-1">-</button>
                <input value={ quantity } type="text" />
                <button onClick={ updateQuantity } value="1">+</button>
            </p>
            <p className="btn-prod">
                <button onClick={ () => {
                        props.addFunction(props.item, quantity) 
                        setQuantity(1)
                    } }>
                    Ajouter au panier
                </button>
            </p>
        </div>
    )
}

export default ProductItem