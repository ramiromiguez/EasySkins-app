import React from 'react'
import { useState, useEffect} from 'react'
import itemsStock from '../../../DataBase/itemsStock.json'
import itemsDataBase from '../../../DataBase/items.json'
import ItemCount from './ItemCount'


export const ItemCountContainer = props => {
    
    const itemDetailId = props.id
    const [ stockData, setStockData] = useState([]);
    const [ itemsData, setItemsData] = useState([]);

    const myPromiseItemsStock = new Promise((resolve, reject) =>{
        setTimeout(()=> resolve (
            itemsStock
        ),2000)
    })

    const myPromiseItemData = new Promise((resolve, reject) =>{
        setTimeout(()=> resolve (
            itemsDataBase
        ),2000)
    })

    const FindItemStock = () =>{
        myPromiseItemsStock
            .then(result => setStockData(result.find(result => result.id === itemDetailId)))
            .catch(reject => console.log(`Error procesing itemsStock`))
    }

    const FindItemsData = () =>{
        myPromiseItemData 
            .then(result => setItemsData(result))
            .catch(reject => console.log(`Error procesing itemsData`))
    }

    useEffect(() =>{
        FindItemStock();
        FindItemsData();
    },[itemDetailId])

    
    return (
        <div>
            <ItemCount element={stockData} elementData={itemsData}/>
        </div>
    )
}

export default ItemCountContainer
