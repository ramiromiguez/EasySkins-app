import React from 'react'
import './itemListContainer.scss'

const ItemListContainer = props =>  {
    return (
        <div className="itemListContainer">
            <h1 className="greeting">{props.greeting}</h1>
            <h3 className="subtitle">{props.subtitle}</h3>
        </div>
    )
}

export default ItemListContainer; 
