import React from 'react'
import { useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './ItemCount.scss'
import { CartContext } from '../../../Context/CartContext'

const ShowMessage = ({stock}) =>{
     return <h4>{`Vas a comprar ${stock}`}</h4>
 }

 const ButtonPlusOne = ({stock, changeStock, maxStock, StockLeft, id, stockQuantity}) =>{
    const [stockLeft, setStockLeft] = useState();
    const [stockTotal, setStockTotal] = useState();

    useEffect(() => {
        setTimeout(() =>{
        setStockLeft(StockLeft(id))
        setStockTotal(StockLimit)
        console.log(stockLeft)
        console.log(stockTotal)
        }, 2000)
    }, [id])

    const StockLimit = () =>{
        console.log(`stockLeft ${stockLeft}`)
        if(stockLeft > 0){
            return stockTotal
        }
        else{
            return 0
        }
    }
    
     return <button className="boton" onClick={() => changeStock(stock + 1) + console.log(stockLeft) + console.log(`xd${stockQuantity}`)} disabled={stock<maxStock?false:true}> +1 </button>
}

const ButtonMinusOne = ({stock, changeStock}) =>{
     return <button className="boton" onClick={() => changeStock(stock - 1)} disabled={stock>0?false:true}> -1 </button>
}

const ButtonAddCart = ({changePress, stock}) =>{
     return <button className="boton" onClick={() => changePress(true) } disabled={stock>0?false:true}> Agregar al carrito </button>
}

export const ItemCount = props =>{
    const [stock, setStock] = useState(0);
    const [press,setPress] = useState(false);

    const handleStock = value => setStock(value);
    const handlePress = value => setPress(value);
    const stockMaxQuantity = props.element.stock
    const stockId = props.element.id
    const [addItems, setAddItems, AddNewItem, RemoveItem, IsInCar, ClearCart, StockLeft] = useContext(CartContext)
    const itemsDataArray = props.elementData
    const [stockQuantity, setStockQuantity] = useState();

    useEffect(() => {
        //setTimeout(() =>{
        setStockQuantity(StockLeft(stockId))
        //}, 2000)
    }, [stockId])
    
    return (press===false) ?
        <div className="butonContainer">
            <ShowMessage stock={stock}/>
            <ButtonMinusOne stock={stock} changeStock={handleStock}/>
            <ButtonAddCart stock={stock} press={press} changePress={handlePress} addItem={AddNewItem} id={stockId} maxStock={stockMaxQuantity} stockQuantity={stockQuantity}/>
            <ButtonPlusOne  stock={stock} changeStock={handleStock} maxStock={stockMaxQuantity} StockLeft={StockLeft} id={stockId}/>
            <button className="boton" onClick={() => IsInCar(stockId)}> Comprobar existencia</button>
        </div>
        :
        <div className="butonContainer">
            <Link className="boton" to={`/Cart`} onClick={() => AddNewItem(stockId,stock, stockMaxQuantity, itemsDataArray)}>Confirmar Compra</Link>
            <button className="boton" onClick={() => handlePress(false)}> Deshacer compra</button>
            <button className="boton" onClick={() => console.log(addItems)}> Comprobar contexto</button>
            <button className="boton" onClick={() => RemoveItem(stockId)}> Eliminar este item</button>
            <button className="boton" onClick={() => IsInCar(stockId)}> Comprobar existencia</button>
            <button className="boton" onClick={() => ClearCart()}> Clear context</button>

        </div>       
}

export default ItemCount

