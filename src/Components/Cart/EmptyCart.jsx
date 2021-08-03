import React from 'react'
import { Link } from 'react-router-dom'

export const EmptyCart = () => {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-10 text-center">
                    <h1 className="text-light">There are no skins in the cart :(</h1>
                    <h1 className="text-light">Go home and add some skins!</h1>
                    <Link to={`/EasySkins-app/`}>
                        <button className="btn btn-outline-light btn-lg mt-4">home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart
