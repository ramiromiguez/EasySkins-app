import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { ConfirmBuy } from '../Components/Cart/ConfirmBuy'
import { EmptyCart } from '../Components/Cart/EmptyCart'
import { OutOfStock } from '../Components/Cart/OutOfStock'
import { FinishedBuy } from '../Components/Cart/FinishedBuy'
import CartItems from '../Components/Cart/CartItems'
import './cart.scss'


export const Cart = () => {

    const { addItems, CartTotalPrice } = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [cartSwitcher, setCartSwitcher] = useState(0)
    const [outOfStockArr, setOutOfStockArr] = useState([]);
    const [orderId, setOrderId] = useState();
    
    
    useEffect(() => {
        setTotal(CartTotalPrice())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [CartTotalPrice])

    useEffect(() => {
        setCartSwitcher(0);
    }, [])

    return addItems.length > 0 && cartSwitcher === 0 ? (
        <div className="container">
            <table className="table text-light mt-4 border">
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
            <h4 className="text-center mt-5">Log in and submit to finish your buy! </h4>
            <ConfirmBuy setCartSwitcher={setCartSwitcher} total={total} setOutOfStockArr={setOutOfStockArr} outOfStockArr={outOfStockArr} setOrderId={setOrderId} />
        </div>
    ) : cartSwitcher === 1 ? (
        <FinishedBuy orderId={orderId} />
    ) : cartSwitcher === 2 ? (
        <div className="container text-center">
            <h3 className="text-white">There is not stock available for the following guns:</h3>
            {
                outOfStockArr.map((element, id) =>
                    <OutOfStock key={id} {...element}
                    />)}
            <h3 className="text-white">We removed the items that werent available</h3>
            <h3 className="text-white">Go back to the cart to see your buy resume updated</h3>
            <Link to={'/EasySkins-app/Cart'}>
                <button className="btn btn-outline-light mb-2 mx-auto" onClick={() => setCartSwitcher(0)}>Cart</button>
            </Link>
        </div>
    )
        : (
            <EmptyCart />
        )
}

export default Cart;