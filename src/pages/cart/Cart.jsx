import React, {useContext, useEffect} from "react";
import { CartContext } from "../../context/cartContext";
import Product from "../../components/product/Product";
import Links from "../../components/links";
import Title from "../../components/title";
import styles from "./cart.module.css";

const Cart = () => {

    const {addedProduct, setAddedProduct, setTotalPurchase, totalPurchase} = useContext(CartContext);
    const {cartContainer, cartUl, cartItem, removeCartButton, cartTotal, cartButtons, backButton, checkoutButton} = styles;

    const handleDelete = (data) => {
        setAddedProduct(addedProduct.filter(product => product.id !== data));
    };

    const totalAmount = () => {
        let sumatoria;
        if(addedProduct.length > 0) {
            sumatoria = addedProduct.reduce((a, b) => {
                return a + b.price;
            }, 0);
        } else {
            sumatoria = 0;
        };
        setTotalPurchase(sumatoria);
    };

    useEffect(() => {
        totalAmount();
    }, [addedProduct]);

    return <main className={cartContainer}>
        <Title text="Carrito" />
        <div>
            <ul className={cartUl}>
        {addedProduct.length > 0 ? addedProduct.map((product => <div className={cartItem} key={product.id}><Product product={product} cart={true} /><button onClick={() => handleDelete(product.id)} className={removeCartButton}>X</button></div>)) : <h4>Carrito vacio</h4>}
        </ul>
        </div>

        <div className={cartTotal}>
          <span>Total</span>
          <span>{`Total $${totalPurchase}`}</span>
        </div>

        <div className={cartButtons}>
          <button className={backButton}><Links to={"/"} text="Volver al catálogo" /></button>
          <button className={checkoutButton}><Links to={"/checkout"} text="Finalizar compra" /></button>
        </div>
    </main>
};

export default Cart;