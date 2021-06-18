import React from 'react'
import './ItemListContainer.scss'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import ItemDetailContainer from './ItemDetailContainer'

const ItemListContainer = props =>  {
    return (
        <div className="itemListContainer">
            <h1 className="greeting">{props.greeting}</h1>
            <h3 className="subtitle">{props.subtitle}</h3>
            <ItemDetailContainer/>
            <ItemList/> 
            <ItemCount stock={25} initial={1}/>
        </div>
    )
}

export default ItemListContainer; 
