import React from 'react'
import './ItemListContainer.scss'
import ItemList from './Components/ItemList/ItemList'
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
            console.log("Me ejecuto")
            showItemsByCategory();
        }
        else{
            showAllItems();
        }
    },[categoryName])

    return (
        <div className="itemListContainer">
            <ItemList data={dataReformed}/>
            
        </div>
)}
        

export default ItemListContainer; 
