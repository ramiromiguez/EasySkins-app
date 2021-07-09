import React from 'react'
import {RiShoppingCart2Fill} from 'react-icons/ri';
import './Navbar.scss'
import { CartContext } from '../../Context/CartContext';
import { useContext, useState, useEffect } from 'react';
import { Cart } from './Cart'

const CartWidget = props =>{

    const [addItems] = useContext(CartContext)
    // const [stock, setStock] = useState(0)
     
    // const totalStockSelected = () =>{
    //      setStock(stock + props.stock)
    // }

    // useEffect(() => {
    //     totalStockSelected()
    // }, [addItems])
    
    return addItems.length > 0 ?(
        <>
        <RiShoppingCart2Fill className='cart'/>
        </>
    ):''
}

export default CartWidget;