import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../Context/CartContext'

const ShowMessage = ({ stock}) => {
    return <h2>{` ${stock} `}</h2>
}

const ButtonPlusOne = ({ stock, changeStock, maxStock, stockAlreadySelected }) => {
    return <button className="btn btn-outline-light" onClick={() => changeStock(stock + 1)} disabled={stock < maxStock - stockAlreadySelected ? false : true}> +1 </button>
}

const ButtonMinusOne = ({ stock, changeStock }) => {
    return <button className="btn btn-outline-light" onClick={() => changeStock(stock - 1)} disabled={stock > 0 ? false : true}> -1 </button>
}

const ButtonAddCart = ({ changePress, stock }) => {
    return <button className="btn btn-outline-light mx-2" onClick={() => changePress(true)} disabled={stock > 0 ? false : true}> Add to the cart</button>
}

export const ItemCount = props => {
    const [stock, setStock] = useState(0);
    const [press, setPress] = useState(false);
    const handleStock = value => setStock(value);
    const handlePress = value => setPress(value);
    const stockMaxQuantity = props.element.stock
    const stockId = props.element.id
    const itemName = props.element.gunName
    const itemPrice = props.element.price
    const { AddNewItem, RemoveItem, ClearCart, addStock, StockChecker } = useContext(CartContext)
    const [stockAlreadySelected, setStockAlreadySelected] = useState(0);


    useEffect(() => {
        setStockAlreadySelected(StockChecker(stockId))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stockId])

    return (press === false) ?
        <div className="butonContainer text-center mt-5 mb-2">
            <ShowMessage stock={stock}/>
            <ButtonMinusOne stock={stock} changeStock={handleStock} />
            <ButtonAddCart stock={stock} changePress={handlePress} />
            <ButtonPlusOne stock={stock} changeStock={handleStock} maxStock={stockMaxQuantity} addStock={addStock} stockAlreadySelected={stockAlreadySelected} />
        </div>
        :
        <div className="butonContainer text-center mt-5 mb-2">
            <Link className="btn btn-outline-light m-1" to={`/Cart`} onClick={() => AddNewItem(stockId, stock, stockMaxQuantity, itemName, itemPrice)}>Confirm Buy</Link>
            <button className="btn btn-outline-light m-1" onClick={() => handlePress(false)}> Undo Buy</button>
        </div>
}

export default ItemCount