import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'

export const Cart = props => {

    const [addItems, setAddItems, AddNewItem, RemoveItem, IsInCar, ClearCart] = useContext(CartContext)

    return addItems.length > 0 ?(
        <div>
            <h4 className="text-white">Skin name: {props.name}</h4>
            <h4 className="text-white">Quantity: {props.stock}</h4>
            <h4 className="text-white">Price: {props.price}</h4>
            <h4 className="text-white">Total: {props.price*props.stock}</h4>
            <button onClick={() => RemoveItem(props.id)}>Quitar Item</button>
            <button className="boton" onClick={() => console.log(addItems)}> Comprobar contexto</button>
        </div>
    ):(
        <h1>no agregaste nada a tu carrito</h1>
    )
}

export default Cart
