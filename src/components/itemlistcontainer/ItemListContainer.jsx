import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import skinsList from '../../DataBase/items.json'
import { useParams } from 'react-router-dom'


const ItemListContainer = props =>  {
    
    const [dataReformed, setDataReformed] = useState([]);
    const {categoryName} = useParams();

    const myPromise = new Promise ((resolve,reject) =>{
        setTimeout(() => resolve(
            skinsList
        ),2000) 
    });
    
    const showAllItems = () =>{ 
        myPromise
            .then(result =>  setDataReformed(result))
            .catch(error => console.log("error"))
    }

    const showItemsByCategory = () =>{ 
        myPromise
            .then(result =>  setDataReformed(result.filter( result => result.category === categoryName)))
            .catch(error => console.log("error"))
    }
    
    useEffect(() => {
        if(categoryName){
            showItemsByCategory();
        }
        else{
            showAllItems();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[categoryName])

    return (
            <ItemList data={dataReformed}/>
)}
        

export default ItemListContainer; 
