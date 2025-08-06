import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [addedProduct, setAddedProduct] = useState([]);


    return <CartContext.Provider value={{addedProduct, setAddedProduct}}>
        {children}
    </CartContext.Provider>
};

export default CartProvider;