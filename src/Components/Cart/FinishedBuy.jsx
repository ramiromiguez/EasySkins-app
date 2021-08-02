import React from 'react'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

//clear cart
export const FinishedBuy = ({ orderId }) => {

    const { ClearCart } = useContext(CartContext);

    useEffect(() => {
        ClearCart()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="text-center text-white mt-4">
            <h2> Your buy ticket id:</h2>
            <h2> {orderId} </h2>
            <h3> thanks for buying!</h3>
            <Link to={`/`}>
                <button className="btn btn-outline-light btn-lg mt-4">home</button>
            </Link>
        </div>
    )
}

export default FinishedBuy
