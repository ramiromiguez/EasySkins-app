import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'

export const Cart = props => {

    const [addItems, setAddItems] = useContext(CartContext)
    const priceModded = props.price.replace('$','')
    const stockXQuantity = parseInt(priceModded) * props.stock 

    const removeItem = (id) => {
        const remove = addItems.filter(element => parseInt(element.itemId) !== id)
        setAddItems(remove)
    }

    return addItems? (
        <div>
            <h4 className="text-white">Skin name: {props.name}</h4>
            <h4 className="text-white">Quantity: {props.stock}</h4>
            <h4 className="text-white">Price: {props.price}</h4>
            <h4 className="text-white">Total: {stockXQuantity}</h4>
            <button onClick={() => removeItem(props.itemId)}>Quitar Item</button>
        </div>
    ):(
        <h1>no agregaste nada a tu carrito</h1>
    )
}

export default Cart
