import React from 'react'
import { useState } from 'react'

export const CartContext = React.createContext([])

export const CartContextProvider = ({children}) => {
    const [addItems, setAddItems] = useState([])

    const AddNewItem = (stockDataId, stockSelected, maxStock, itemsDataArray) =>{
        const findId = addItems.find(element => element.id === stockDataId);
        const findDataId = itemsDataArray.find(element => element.id === stockDataId);
        if(findId && findDataId){
            if(stockSelected<=maxStock){
                const new_items = (addItems.filter(element => element.id !== stockDataId))
                const object = {
                    id : stockDataId,
                    stock: stockSelected + findId.stock,
                    price: findDataId.price,
                    name: findDataId.gunName
                }
            
            setAddItems([...new_items, object])
            }
            return null
        }
        const object = {
            id : stockDataId,
            stock: stockSelected,
            price: findDataId.price ,
            name: findDataId.gunName
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


    return (
        <CartContext.Provider value={[addItems, setAddItems, AddNewItem, RemoveItem, IsInCar, ClearCart]}>
            {children}
        </CartContext.Provider>
    )
}


