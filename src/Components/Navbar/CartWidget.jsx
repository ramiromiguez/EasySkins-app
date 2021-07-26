import React from 'react'
import { RiShoppingCart2Fill } from 'react-icons/ri';
import '../../Screens/Navbar.scss'
import { CartContext } from '../../Context/CartContext';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { addItems } = useContext(CartContext)
    const [stockTotal, setStockTotal] = useState(0)

    useEffect(() => {
        if (addItems.length > 0) {
            const stock = addItems.map((element, id) =>
                element.stock
            );
            setStockTotal(stock.reduce((accumulator, currentValue) => accumulator + currentValue))
        }
    }, [addItems])

    return addItems.length > 0 ? (
        <div className="row">
            <Link to={'/Cart'}>
                <RiShoppingCart2Fill className='cart' />
            </Link>
            <h5 className="text-light">{stockTotal}</h5>
        </div>
    ) : ''
}

export default CartWidget;