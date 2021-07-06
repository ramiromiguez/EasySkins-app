import React from 'react'
import { useState } from 'react'

export const CartContext = React.createContext([])

export const CartContextProvider = ({children}) => {
    const [addItems, setAddItems] = useState([])

    const AddNewItem = (stockDataId, stockSelected, maxStock, itemsDataArray) =>{
        const findId = addItems.find(element => element.id === stockDataId);//find me filtra el addItem por id 
        const findDataId = itemsDataArray.find(element => element.id === stockDataId);
        if(findId && findDataId){//si find existe significa que ya se habia cargado un item con este id
            if(stockSelected<=maxStock){// esto es provicional xd
                const new_items = (addItems.filter(element => element.id !== stockDataId)) // filtro todos los items menos el seleccionado
                const object = {// le cargo la data
                    id : stockDataId,
                    stock: stockSelected + findId.stock,
                    price: findDataId.price,
                    name: findDataId.gunName,
                    stockLimited: findId.stockLimit
                }
            setAddItems([...new_items, object])// piso el nuevo item a los viejos
            }
            else{
                return null
            }
            return null
        }
        const object = {
            id : stockDataId,
            stock: stockSelected,
            price: findDataId.price,
            name: findDataId.gunName,
            stockLimit: maxStock
        }
        setAddItems([...addItems, object])
    }

    const RemoveItem = (id) => {
        const remove = addItems.filter(element => parseInt(element.id) !== parseInt(id))
        setAddItems(remove)
    }


    const IsInCar = (id) => {
        const findItem = addItems.find(element => element.id === id)
        if(findItem){
            console.log("Existe")
            return true;
        }
        console.log("No Existe")
        return false;
    }

    const ClearCart = () => {
        setAddItems([])
    } 

    const  StockLeft = (id) => {
        const findItem = addItems.find(element => element.id === id)
        if(findItem){
           return findItem.stock
        }
        console.log("No Existe")
    }


    return (
        <CartContext.Provider value={[addItems, setAddItems, AddNewItem, RemoveItem, IsInCar, ClearCart, StockLeft]}>
            {children}
        </CartContext.Provider>
    )
}


