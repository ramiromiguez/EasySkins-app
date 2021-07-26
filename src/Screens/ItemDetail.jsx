import React from 'react'
import ItemCount from '../Components/ItemDetailContainer/ItemCount/ItemCount'
import './ItemDetail.scss'


export const ItemDetail = props => {
    return props.element ?  (
        <div className="cards col-6 mx-auto my-3 border border-white rounded">
            <h2 className="text-center">{props.element.gunName}</h2>
            <img src={props.element.photo} alt=""/>
            <h6>State: {props.element.state}</h6>
            <h6>Float: {props.element.float}</h6>
            <h6>Price: {props.element.price}</h6>
            <h6>Detail: {props.element.detail}</h6>
            <ItemCount element={props.element}/>
        </div>
    ):''
}

export default ItemDetail
