import React, { useState } from 'react'
import '../../ItemListContainer'


export const LiComponents = props => {
    const { stock, initial} = props;
    const [ currStock, setCurrStock] = useState(stock)
    const [count, setCount] = useState(initial)

    const addItem = () => {
            setCount(count + 1)
    }
    
    const removeItem = () => {
            setCount (count - 1)
    }

    const onAdd = () => {
        if (currStock > 0)
            setCurrStock( currStock - count )
            setCount(0)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="itemCountContainer col-6 col-md-4 mx-auto my-4 border border-white">
                    <div className="py-4 px-2">
                        <h6 className="text-center">Karambit Fade</h6>
                        <h6 className="text-center"> Stock disponible: {currStock}</h6>
                        <div className="mt-3">
                            <div className="row">
                                <div className="col-3 text-start">
                                    <button onClick={addItem} type="button" className="btn btn-outline-light" disabled={count>=currStock?true:false}>+1</button>
                                </div>
                                <div className="col-6 text-center">
                                    <button onClick={onAdd} type="button" className="btn btn-outline-light" id="agregarCarrito">agregar al carrito: {count}</button>
                                </div>
                                <div className="col-3 text-end">
                                    <button onClick={removeItem} type="button" className="btn btn-outline-light" disabled={count<=1?true:false}>-1</button>
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiComponents;
