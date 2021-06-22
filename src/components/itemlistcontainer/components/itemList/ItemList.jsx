import React from 'react'
import { Item } from './Item'
import './itemList.scss'


export const ItemList = props => {
    const { data } = props;
    return(
        <div className="container">
            <div className="row">
                {
                data.map((element, id) => 
                <Item key= {id} {...element}
                />)}
            </div>
        </div>
    ) 
}


export default ItemList