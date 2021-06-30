import React from 'react'
import { useState, useEffect, useContext } from 'react'
import itemStock from '../../../dataBase/itemsStock.json'
import ItemCount from './ItemCount'


export const ItemMapp = props => {
    
    const itemDetailId = props.id
    const [ stockData, setStockData] = useState([]);

    const myPromise = new Promise((resolve, reject) =>{
        setTimeout(()=> resolve (
            itemStock
        ),2000)
    })

    const FindItem = () =>{
        myPromise
            .then(result => setStockData(result.find(result => result.id === itemDetailId)))
            .catch(reject => console.log(`Error procesing itemStock`))
    }

    useEffect(() =>{
        FindItem();
    },[itemDetailId])

    
    return (
        <div>
            <ItemCount element={stockData}/>
        </div>
    )
}

export default ItemMapp
