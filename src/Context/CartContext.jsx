import React from 'react'
import { useState } from 'react'

export const CartContext = React.createContext([])

export const CartContextProvider = ({children}) => {
    const [addItems, setAddItems] = useState([])
    const [total, setTotal] = useState(0)

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
    
    const CartTotalPrice = () =>{
        if(addItems.length>0){
            const multiplication = addItems.map((element, id)=>
                element.price*element.stock
                )
            setTotal(multiplication.reduce((accumulator, currentValue) => accumulator + currentValue))
            return total
        }
        else{
            return 0
        }

    }

    const StockChecker = (id) => {
        const findItem = addItems.find(element => element.id === id)
        if(findItem){
            return findItem.stock
        }
        else{
            return 0
        }
    }

    const RemoveItem = (id) => {
        const remove = addItems.filter(element => element.id !== id)
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
        <CartContext.Provider value={{addItems, setAddItems, CartTotalPrice, RemoveItem, AddNewItem, IsInCar, ClearCart, StockChecker}}>
            {children}
        </CartContext.Provider>
    )
}