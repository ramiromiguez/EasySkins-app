import React from 'react'
import './itemList.scss'
import './ItemList'

export const Item = props => {
    return (
        <div className='col-6 col-md-4 cards mb-5 border border-white'>
            <h4 className='text-center'>{props.skinName}</h4>
            <img src={props.photo} alt="" className="mx-auto"/>
            <h6>State: {props.state}</h6>
            <h6>Float: {props.float}</h6>
            <h6>Price: {props.price}</h6>
        </div>
    )
}

export default Item
    