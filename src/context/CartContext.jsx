import React from 'react'
import { useState } from 'react'

export const CartContext = React.createContext([])

export const CartContextProvider = ({children}) => {
    const [addItems, setAddItems] = useState([])

    return (
        <CartContext.Provider value={[addItems, setAddItems]}>
            {children}
        </CartContext.Provider>
    )
}


