import React from 'react'
import './itemList.scss'
import './ItemList'
import { Link } from 'react-router-dom'


export const Item = props => {
    return (
        <Link className='cards col-6 col-md-4 mb-5 border border-white' to={"/item/"+ props.id}>
            <h4 className='text-center'>{props.gunName}</h4>
            <img src={props.photo} alt="" className="mx-auto"/>
            <h6>State: {props.state}</h6>
            <h6>Float: {props.float}</h6>
            <h6>Price: {props.price}</h6>
        </Link>
    )
}

export default Item
    