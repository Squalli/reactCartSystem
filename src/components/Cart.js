import ElementCart from './ElementCart'

function Cart(props){

    const renderItems = () => {
        return(
            <table className="cart-items">
                <thead>
                    <tr>
                        <th>Quantité</th>
                        <th>Produit</th>
                        <th>Prix unitaire</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                { 
                    props.order.map( (orderLine) => {
                        return (
                            <ElementCart
                                deleteFunction={ props.deleteFunction }
                                key={ orderLine.item.id } 
                                quantity={ orderLine.quantity } 
                                item={ orderLine.item }/>
                        )
                    })
                }
                </tbody>
            </table>   
        )
    }

    const computeTotal = () => {
        let init = 0
        /*on fait appel à un reducer (accumulateur) pour calculer le total
        en bouclant sur chaque produit*/
        return props.order.reduce( (acc, orderItem) => {
            return (orderItem.item.price * orderItem.quantity) + acc 
        }, init)
    }
    
    return (
      <div>
        { 
            props.order.length ?        //si
                renderItems() :         //alors
                'Votre panier est vide' //sinon
        }
        <p>TOTAL DE LA COMMANDE : <strong>{ computeTotal().toFixed(2) } €</strong></p>
      </div>
    )
}

export default Cart