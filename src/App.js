import './App.css';
import { useState } from 'react'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {
  
  const items = [
    { id: 124, name: "Nounours", price: 25.99 },
    { id: 234, name: "Hochet", price: 9.5 },
    { id: 488, name: "Pyjama Lapin", price: 46.49 },
    { id: 428, name: "Koala chaussettes", price: 30.50 }
  ]

  // orderItems = [
  //   { item : ..., quantity: ...}, 
  //   { item : ..., quantity: ...},
  //   ...
  // ]
  const [orderItems, setOrderItems] = useState([])

  const addItemToOrder = (item, quantity) => {
    let updateQuantity = false
    let newOrderItems = orderItems.map( (orderItem) => {
      //si l'item était déjà présent dans la commande
      if(item.id === orderItem.item.id){
        //on ajoute la quantité en paramètre à la quantité actuelle de l'item
        orderItem.quantity+= quantity
        updateQuantity = true
        //ce booléen est un repère pour savoir si
        //une mise à jour d'un item déja présent a été effectuée
      } 
      return orderItem
    })

    //si seule la quantité d'un produit déjà présent a été mise à jour
    if(updateQuantity){
      setOrderItems([...newOrderItems])
    }
    else{//dans le cas où le produit ajouté n'était pas dans le panier
      setOrderItems([...newOrderItems, { item : item, quantity: quantity }])
    }
  }

  const deleteItemToOrder = (id) => {
    setOrderItems(orderItems.filter((elem) => {
      return elem.item.id !== id
    }))
  }

  return(
    <main>
      <Cart 
        order={ orderItems } 
        deleteFunction={ deleteItemToOrder } 
        />
      <ProductList 
        addFunction={ addItemToOrder } 
        items={ items }/>
    </main>
  )
}

export default App
