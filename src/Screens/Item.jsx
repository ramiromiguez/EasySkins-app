import React from 'react'
import { Link } from 'react-router-dom'
import './item.scss'


export const Item = props => {
    return (
            <div className="item animate__animated animate__backInLeft">
                <Link to={"/item/"+ props.id} className="link">
                    <h4 className="name">{props.gunName}</h4>
                    <img src={props.photo} alt="" className="photo"/>
                    <h6>State: {props.state}</h6>
                    <h6>Float: {props.float}</h6>
                    <h6 className="price">Price: {props.price}</h6>
                </Link>
            </div>  
    )
}

export default Item
    