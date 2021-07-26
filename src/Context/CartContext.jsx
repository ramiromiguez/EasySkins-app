import React from 'react'
import { useState } from 'react'

export const CartContext = React.createContext([])

export const CartContextProvider = ({children}) => {
    const [addItems, setAddItems] = useState([])
    const [addStock, setAddStock] = useState([])

    const AddNewItem = (stockDataId, stockSelected, maxStock, itemName, itemPrice) =>{
        const findId = addItems.find(element => element.id === stockDataId); 
        if(findId){
            const new_items = (addItems.filter(element => element.id !== stockDataId)) 
            const object = {
                id : stockDataId,
                stock: stockSelected + findId.stock,
                price: findId.price,
                name: findId.gunName,
                stockLimit: findId.stockLimit
            }
            return setAddItems([...new_items, object])
        }
        const object = {
            id : stockDataId,
            stock: stockSelected,
            price: itemPrice,
            name: itemName,
            stockLimit: maxStock
        }
        setAddItems([...addItems, object])
    }

    const  AddNewStock = (id, stockSelected) => {
        const findItem = addStock.find(element => element.id === id)
        if(findItem){
            const new_items = (addStock.filter(element => element.id !== id)) 
            const object = {
                id: id,
                stock: stockSelected + findItem.stock
            }
        return setAddStock([...new_items, object])
        }
        const object = {
            id : id,
            stock: stockSelected
        }
        setAddStock([...addStock, object])
    }

    const StockChecker = (id) => {
        const findItem = addStock.find(element => element.id === id)
        if(findItem){
            return findItem.stock
        }
        else{
            return 0
        }
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
        <CartContext.Provider value={[addItems, setAddItems, AddNewItem, RemoveItem, IsInCar, ClearCart, addStock, setAddStock, AddNewStock, StockChecker]}>
            {children}
        </CartContext.Provider>
    )
}