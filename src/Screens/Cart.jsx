import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { ConfirmBuy } from '../Screens/ConfirmBuy'
import { EmptyCart } from '../Components/Cart/EmptyCart'
import { OutOfStock } from '../Components/Cart/OutOfStock'
import { FinishedBuy } from '../Components/Cart/FinishedBuy'
import CartItems from '../Components/Cart/CartItems'

import './cart.scss'


export const Cart = () => {

    const { addItems, CartTotalPrice } = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [switcher, setSwitcher] = useState(0)
    const [cartSwitcher, setCartSwitcher] = useState(false)
    const [outOfStockArr, setOutOfStockArr] = useState();

    console.log(outOfStockArr)
    useEffect(() => {
        setTotal(CartTotalPrice())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CartTotalPrice])

    useEffect(() => {
        setSwitcher(0);
    }, [])

    const checkSwitcher = () => {
        switch (switcher) {
            case 0: return <ConfirmBuy setSwitcher={setSwitcher} total={total} setOutOfStockArr={setOutOfStockArr} outOfStockArr={outOfStockArr}/>; // Caso 0 : Caso pre confirmar compra
            case 1: return <OutOfStock setSwitcher={setSwitcher} />
            case 2: return <FinishedBuy setCartSwitcher={setCartSwitcher} />
            default: return null

        }
    }



    return addItems.length > 0 && cartSwitcher === false ? (
        <div className="container">
            <table className="table text-light mt-2">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sum</th>
                        <th scope="col">Remove Item</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {addItems.map((element, id) =>
                        <CartItems key={id}{...element}></CartItems>
                    )}
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <th></th>
                        <td></td>
                        <td><h4>{total}</h4></td>
                    </tr>
                </tbody>
            </table>
            {checkSwitcher()}

        </div>
    ) : cartSwitcher === true ? (
        <FinishedBuy setCartSwitcher={setCartSwitcher}/>
    ) : (
        <EmptyCart />
    )
}

export default Cart;