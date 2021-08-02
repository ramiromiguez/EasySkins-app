import React from 'react'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'

//clear cart
export const FinishedBuy = ({setCartSwitcher}) => {

    const {ClearCart} = useContext(CartContext);

    useEffect(() => {
       ClearCart();
        setCartSwitcher(true)
    }, [])

    return (
        <div>
            <h1> gracias por su compra</h1>
        </div>
    )
}

export default FinishedBuy
