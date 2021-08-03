import React from 'react'
import { RiShoppingCart2Fill } from 'react-icons/ri';
import '../../Screens/Navbar.scss'
import { CartContext } from '../../Context/CartContext';
import { useContext} from 'react';
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { addItems } = useContext(CartContext)

    return addItems.length > 0 ? (
        <div className="row">
            <Link to={'/EasySkins-app/Cart'}>
                <RiShoppingCart2Fill className='cart' />
            </Link>
            <h5 className="text-light">{addItems.length}</h5>
        </div>
    ) : ''
}

export default CartWidget;