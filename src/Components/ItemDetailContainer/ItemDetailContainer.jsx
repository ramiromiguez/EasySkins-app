import React from 'react'
import { useEffect, useState } from 'react';
import skinsList from '../../DataBase/items.json'
import ItemDetail from '../../Screens/ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    
    const {itemId} = useParams();

    const myPromise = new Promise ((resolve,reject) => {
        setTimeout(() => resolve(
            skinsList
        ),2000)
    });

    const [itemSelector, setItemSelector] = useState();
    
    const getItem = ()  => {
        myPromise
        .then(result => setItemSelector(result.find(result => result.id === parseInt(itemId))))
    }

    useEffect(() => {
        getItem();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[itemId])


    return (
        <div className="container">
            <div className="row">
                <ItemDetail element={itemSelector}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer
