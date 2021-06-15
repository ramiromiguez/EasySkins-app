import React from 'react'
import './ItemListContainer.scss'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = props =>  {
    return (
        <div className="itemListContainer">
            <h1 className="greeting">{props.greeting}</h1>
            <h3 className="subtitle">{props.subtitle}</h3>
            <ItemCount stock={25} initial={1}/>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer; 
