import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'

export const CartItems = props => {
    
    const [addItems, setAddItems, AddNewItem, RemoveItem, IsInCar, ClearCart, addStock, setAddStock, AddNewStock, StockChecker] = useContext(CartContext)
    return (
        <div className="row">
            <div className="col-2">
                <h4>{props.name}</h4>
            </div>
            <div className="col-2">
                <h4>{props.stock}</h4>
            </div>
            <div className="col-2">
                <h4>{props.price}</h4>
            </div>
            <div className="col-2">
                <h4>{props.price*props.stock}</h4>
            </div>
            <div className="col-2">
                <button className="btn btn-light" onClick={() => RemoveItem(props.id)}> Remove </button>
            </div>
            <div className="col-2">
            </div>
        </div>
    )
}

export default CartItems