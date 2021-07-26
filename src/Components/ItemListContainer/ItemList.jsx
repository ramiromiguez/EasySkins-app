import React from 'react'
import { Item } from '../../Screens/Item'
import '../../Screens/item.scss'

export const ItemList = props => {
    const { data } = props;
    return(
        <div className="container-fluid">
            <div className="row mx-2">
                {
                data.map((element, id) => 
                <Item key= {id} {...element}
                />)}
            </div>
        </div>
    ) 
}


export default ItemList
