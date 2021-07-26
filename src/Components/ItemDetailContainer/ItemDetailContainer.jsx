import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from '../../Screens/ItemDetail'
import { useParams } from 'react-router-dom'
import { itemsCollection } from '../../Firebase/firebase';

function ItemDetailContainer() {
    
    const {id} = useParams();
   

    const [item, setItem] = useState();

    useEffect(() => {
        (async () => {
            const response = await itemsCollection.doc(id).get();
            setItem({ id : response.id, ...response.data() });
        })();
      }, [id]);
    
    return (
        <div className="container">
            <div className="row">
                <ItemDetail element={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer
