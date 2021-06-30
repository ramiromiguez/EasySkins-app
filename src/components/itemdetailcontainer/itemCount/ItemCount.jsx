import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ItemCount.scss'
import { CartContext } from '../../../context/CartContext'

const ShowMessage = ({stock}) =>{
     return <h4>{`Vas a comprar ${stock}`}</h4>
 }

 const ButtonPlusOne = ({stock, changeStock, maxStock}) =>{
     return <button className="boton" onClick={() => changeStock(stock + 1)} disabled={stock<maxStock?false:true}> +1 </button>
}

const ButtonMinusOne = ({stock, changeStock}) =>{
     return <button className="boton" onClick={() => changeStock(stock - 1)} disabled={stock>0?false:true}> -1 </button>
}

const ButtonAddCart = ({changePress, id, stock, maxStock, addItem}) =>{
     return <button className="boton" onClick={() => changePress(true) + addItem(id,stock)} disabled={stock>0?false:true}> Agregar al carrito </button>
}

export const ItemCount = props =>{
    
    const [stock, setStock] = useState(0);
    const [press,setPress] = useState(false)
    const handleStock = value => setStock(value);
    const handlePress = value => setPress(value);
    const stockMaxQuantity = props.element.stock
    const stockId = props.element.id

    const [addItems, setAddItems] = useContext(CartContext)
    
    const addItem = (id,cantidad) =>{
        const object = {
            itemId : id,
            stock: cantidad
        }
        setAddItems([...addItems, object])
    }

    const isInCar = (id) => {
        console.log(id)
        const findItem = addItems.find(element => element.itemId === id)
        console.log(findItem.itemId)
        if(findItem){
            console.log("Existe")
            return true;
        }
        console.log("No Existe")
        return false;
    }

    const removeItem = (id) => {
        const remove = addItems.filter(element => parseInt(element.itemId) !== parseInt(id))
        setAddItems(remove)
    }

    const clearCart = () => {
        setAddItems([])
    } 

    console.log(addItems)

    return (press===false) ?
        <div className="butonContainer">
            <ShowMessage stock={stock}/>
            <ButtonMinusOne stock={stock} changeStock={handleStock}/>
            <ButtonAddCart stock={stock} press={press} changePress={handlePress} addItem={addItem} id={stockId} maxStock={stockMaxQuantity}/>
            <ButtonPlusOne  stock={stock} changeStock={handleStock} maxStock={stockMaxQuantity}/>
            <button className="boton" onClick={() => isInCar(stockId)}> Comprobar existencia</button>
        </div>
        :
        <div className="butonContainer">
            <Link className="boton" to={`/Cart`}>Confirmar Compra</Link>
            <button className="boton" onClick={() => handlePress(false)}> Deshacer compra</button>
            {/* <button className="boton" onClick={() => console.log(addItems)}> Comprobar contexto</button> */}
            <button className="boton" onClick={() => removeItem(stockId)}> Eliminar este item</button>
            <button className="boton" onClick={() => isInCar(stockId)}> Comprobar existencia</button>
            <button className="boton" onClick={() => clearCart()}> Clear context</button>

        </div>       
}

export default ItemCount

