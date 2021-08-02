import React from 'react'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'

export const OutOfStock = props => {

    const { RemoveItem, addItems } = useContext(CartContext)
    
    const Remove = () => {
        RemoveItem(props.id)
    }
    
    useEffect(() => {
        Remove()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addItems])

    return (
        <div>
            <h4 className="text-white text-center mb-5">"{props.gunName}"</h4>
        </div>
    )
}

export default OutOfStock
