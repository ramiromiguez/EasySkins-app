import React from 'react'
import ButtonComponent from './itemCount/ItemCount'
import ItemCount from './itemCount/ItemCount'
import './ItemDetail.scss'


export const ItemDetail = props => {

    return props.element ?  (
        <div className="cards col-6 mx-auto my-3 border border-white rounded">
            <h2 className="text-center">{props.element.gunName}</h2>
            <img src={props.element.photo} alt=""/>
            <h6>State: {props.element.state}</h6>
            <h6>Float: {props.element.float}</h6>
            <h6>Price: {props.element.price}</h6>
            <h6>Detail: {props.element.detalle}</h6>
            <ItemCount/>
        </div>
    ):''
}

export default ItemDetail
