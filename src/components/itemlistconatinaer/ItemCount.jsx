import React, { useState } from 'react'
import './ItemListContainer.scss'


export const LiComponents = props => {
    
    const { stock, initial} = props;
    const [count, setCount] = useState(initial)
    const [buttonOnOff, setButtonOnOff] = useState(false)
    const cantidad = "undifined" 

    const addItem = () => {
        if (count < stock)
            setCount(count + 1)
    }
    
    const removeItem = () => {
        if (count > initial && stock > 0)
            setCount (count - 1)
    }

    const onAdd = () => {
        if (stock > 0)
            stock = stock - count;
        if (stock < 1)
            alert("no hay mas stock!");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="itemCountContainer col-6 col-md-4 mx-auto mt-4 border border-white">
                    <h6 id="itemName">Karambit Fade</h6>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col-3">
                                <button onClick={addItem} type="button" class="btn btn-outline-light">+1</button>
                            </div>
                            <div className="col-6">
                                <button onClick={onAdd} type="button" class="btn btn-outline-light" id="agregarCarrito">agregar al carrito: {count}</button>
                            </div>
                            <div className="col-3">
                                <button onClick={removeItem} type="button" class="btn btn-outline-light">-1</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiComponents;
