import React from 'react'
import { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import './ItemCount.scss'
import { CartContext } from '../../../Context/CartContext'

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
     return <button className="boton" onClick={() => changePress(true) + addItem(id,stock,maxStock)} disabled={stock>0?false:true}> Agregar al carrito </button>
}

export const ItemCount = props =>{
    const [stock, setStock] = useState(0);
    const [press,setPress] = useState(false)
    

    const handleStock = value => setStock(value);
    const handlePress = value => setPress(value);
    const stockMaxQuantity = props.element.stock
    const stockId = props.element.id
    const [addItems, setAddItems] = useContext(CartContext)
    const itemsDataArray = props.elementData

    const addItem = (id,cantidad, maxStock) =>{
        const findId = addItems.find(element => element.itemId === id);
        const findDataId = itemsDataArray.find(element => element.id === stockId);
        if(findId && findDataId){
            if(stock<=maxStock){
                const new_items = (addItems.filter(element => element.itemId !== id))
                const object = {
                    itemId : id,
                    stock: cantidad + findId.stock,
                    price: findDataId.price,
                    name: findDataId.gunName
                }
            
            setAddItems([...new_items, object])
            }
            return null
        }
        const object = {
            itemId : id,
            stock: cantidad,
            price: findDataId.price ,
            name: findDataId.gunName
        }
        setAddItems([...addItems, object])
    }

    const isInCar = (id) => {
        const findItem = addItems.find(element => element.itemId === id)
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
            <button className="boton" onClick={() => console.log(addItems)}> Comprobar contexto</button>
            <button className="boton" onClick={() => removeItem(stockId)}> Eliminar este item</button>
            <button className="boton" onClick={() => isInCar(stockId)}> Comprobar existencia</button>
            <button className="boton" onClick={() => clearCart()}> Clear context</button>

        </div>       
}

export default ItemCount

