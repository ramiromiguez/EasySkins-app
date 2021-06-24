import React from 'react'
import { useState } from 'react'
import '../ItemDetail'
import { Link } from 'react-router-dom'
import './ItemCount.scss'

 const ShowMessage = ({stock}) =>{
     return <h4>{`Vas a comprar ${stock}`}</h4>
 }

 const ButtonPlusOne = ({stock, changeStock}) =>{
     return <button className="boton" onClick={() => changeStock(stock + 1)} disabled={stock<25?false:true}> +1 </button>
}

const ButtonMinusOne = ({stock, changeStock}) =>{
     return <button className="boton" onClick={() => changeStock(stock - 1)} disabled={stock>0?false:true}> -1 </button>
}

const ButtonAddCart = ({changePress, stock}) =>{
     return <button className="boton" onClick={() => changePress(true)} disabled={stock>0?false:true}> Agregar al carrito </button>
}

const StockContainer = ({component:CustomButtonPlusOne, component2:CustomButtonMinusOne, component3:CustomButtonAddCart}) =>{
    const [stock, setStock] = useState(0);
    const [press,setPress] = useState(false)
    const handleStock = value => setStock(value);
    const handlePress = value => setPress(value);


    return (press===false) ?
        <div className="butonContainer">
            <ShowMessage stock={stock}/>
            <CustomButtonMinusOne stock={stock} changeStock={handleStock}/>
            <CustomButtonAddCart stock={stock} press={press} changePress ={handlePress}/>
            <CustomButtonPlusOne  stock={stock} changeStock={handleStock}/>
        </div>
        :
        <div className="butonContainer">
            <Link className="boton" to={`/Cart`}>Confirmar Compra</Link>
            <button className="boton" onClick={() => handlePress(false)}> Deshacer compra</button>
        </div>       
}

export const ItemCount = props => {   

    return(
        <div className="mb-2"> 
            <StockContainer component={ButtonPlusOne} component2={ButtonMinusOne} component3={ButtonAddCart}/>
        </div>
        )
}

export default ItemCount
