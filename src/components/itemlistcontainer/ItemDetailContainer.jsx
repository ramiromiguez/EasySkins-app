import React from 'react'
import { useEffect, useState } from 'react';
import skinsList from '../../items.json'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    

    const myPromise = new Promise ((resolve,reject) => {
        setTimeout(() => resolve(
            skinsList
        ),2000)
    });


    const [itemSelector, setItemSelector] = useState([]);
    
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

   
    const randomNumber = parseInt(getRandomArbitrary(0,6).toFixed())

    const getItem = () => {
        myPromise
            .then(result => setItemSelector(skinsList.filter(element => element.id === randomNumber)))
    }
    

    useEffect(() => {
        getItem();
    },[])

    return (
        <div className="container">
            <div className="row">
            {console.log(itemSelector[0])}
            <ItemDetail element={itemSelector[0]}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer
