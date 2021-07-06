import React from 'react'
import {RiShoppingCart2Fill} from 'react-icons/ri';
import './Navbar.scss'
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';

const CartWidget = () =>{

    const [addItems] = useContext(CartContext)
    
    return addItems.length > 0 ?(
        <RiShoppingCart2Fill className='cart'/>
    ):''
}

export default CartWidget;