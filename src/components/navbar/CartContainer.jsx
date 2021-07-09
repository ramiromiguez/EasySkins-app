import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import {Cart} from './Cart' 


export const CartContainer = () => {
    
    const [addItems] = useContext(CartContext)
    
    return (
        <div className="container">
            <div className="row">
                {
                addItems.length > 0 ?
                    addItems.map((element, id) => 
                    <Cart key= {id} {...element}/>)

                    :<h1 className="text-white">No hay nada en el carro</h1>}
            </div>
        </div>
    )
}

export default CartContainer
