import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { dataBase } from '../../Firebase/firebase'


const ItemListContainer = props =>  {
    
    const [items, setItems] = useState([]);
    const {category} = useParams();

    const showAllItems = () =>{ 
        (async ()=>{
            const response = await dataBase.collection("items").get()
            setItems(response.docs.map(item => ({ id: item.id, ...item.data()})))
        })();
    }

    const showItemsByCategory = () =>{ 
        const filteredCollection = dataBase.collection("items").where("category", "==", category);
        filteredCollection.get().then((response) => {
          const filteredItems = response.docs.map((element) => {
            return { ...element.data(), id: element.id };
          });
          setItems(filteredItems);
        });
    }
    
    useEffect(() => {
        if(category){
            showItemsByCategory();
        }
        else{
            showAllItems();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[category])

    return (
            <ItemList data={items}/>
)}
        

export default ItemListContainer; 
