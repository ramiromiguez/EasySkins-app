import React from 'react'
import './Navbar.scss'

export const LiComponents = props => {
    return (
        <div>
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="#">{props.text}</a>
             </li>
        </div>
    )
}

export default LiComponents;

