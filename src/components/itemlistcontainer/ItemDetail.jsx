import React from 'react'

export const ItemDetail = props => {

    return props.element?(
        <div className="col-6 mx-auto my-3 border border-white rounded">
            <h2 className="text-center">{props.element.gunName}</h2>
            <img src={props.element.photo} alt="" className="mx-auto"/>
            <h6>State: {props.element.state}</h6>
            <h6>Float: {props.element.float}</h6>
            <h6>Price: {props.element.price}</h6>
            <h6>Detail: {props.element.detalle}</h6>
        </div>
        
    ):''
}

export default ItemDetail
