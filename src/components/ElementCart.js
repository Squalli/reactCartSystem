
function ElementCart(props) {

    return (
        <tr>
            <td>{ props.quantity } &times; </td>
            <td>{ props.item.name }</td>
            <td>{ props.item.price.toFixed(2) } €</td>
            <td>{ (props.item.price*props.quantity).toFixed(2) } €</td> 
            <td>
                <button onClick={ () => props.deleteFunction(props.item.id)}>
                    Suppr.
                </button>
            </td>
        </tr>
    )
}

export default ElementCart