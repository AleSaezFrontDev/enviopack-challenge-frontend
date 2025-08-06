import React, {useContext} from "react";
import { CartContext } from "../../context/cartContext";

const Cart = () => {

    const {addedProduct, setAddedProduct} = useContext(CartContext);

    return <main>
        <h1>Carrito</h1>
        {addedProduct.length > 0 ? addedProduct.map((product => <><span>{product.title}</span><span>{product.price}</span></>)) : <h1>Carrito vacio</h1>}
        <span>Total $20.000</span>

        <button>Volver al catalogo</button> <button>Finalizar Compra</button>
    </main>
};

export default Cart;