import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [addedProduct, setAddedProduct] = useState([]);
    const [totalPurchase, setTotalPurchase] = useState(0);


    return <CartContext.Provider value={{addedProduct, totalPurchase, setAddedProduct, setTotalPurchase}}>
        {children}
    </CartContext.Provider>
};

export default CartProvider;