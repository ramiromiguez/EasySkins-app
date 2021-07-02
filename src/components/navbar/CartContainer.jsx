import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import {Cart} from './Cart' 


export const CartContainer = () => {
    const [addItems, setAddItems] = useContext(CartContext)
    
    return (
        <div>
            <div className="container">
            <div className="row">
                {
                addItems.map((element, id) => 
                <Cart key= {id} {...element}
                />)}
            </div>
        </div>
        </div>
    )
}

export default CartContainer
