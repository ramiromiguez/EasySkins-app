import React from 'react'
import { useState } from 'react'
import { Item } from './Item'
import './itemList.scss'
import skinsList from '../../../../items.json'

export const ItemList = () => {
    
    const myPromise = new Promise ((resolve,reject) =>{
        setTimeout(() => resolve(
            skinsList
        ),2000)
    });        

    const [skinsItem, setSkinsItem] = useState([]);


    myPromise
        .then(result =>  setSkinsItem(result))


    return(
        <div className="container">
            <div className="row">
                {skinsItem.map((element, id) => 
                <Item key= {id} {...element}
                />)}
            </div>
        </div>
    ) 
}


export default ItemList
