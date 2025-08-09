import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/UserContext";
import Links from "../../components/links";
import Title from "../../components/title";
import styles from "./checkout.module.css";

const Checkout = () => {

    const {totalPurchase, setAddedProduct, setTotalPurchase} = useContext(CartContext);
    const {userCredit, setUserCredit} = useContext(UserContext);
    const [result, setResult] = useState(undefined);
    const {checkoutMessage, checkoutMain, checkoutButton} = styles;

    useEffect(() => {
        if(userCredit >= totalPurchase) {
            setResult(true);
            setAddedProduct([]);
            setTotalPurchase(0);
            setUserCredit(userCredit - totalPurchase);
        }
        else setResult(false);
    }, []);

    return <main className={checkoutMain}>
        <Title text={"Estado de la compra"} />
        {result ?
        <div className={checkoutMessage}>
        <span>La compra se realizó con éxito</span>
        <button className={checkoutButton}><Links to={"/"} text="Volver al catálogo" /></button>
        </div>
        :
        <div className={checkoutMessage}>
        <span>Ocurrió un error con la compra, revisa que el importe no supere el crédito disponible en tu cuenta</span>
        <button className={checkoutButton}><Links to={"/cart"} text="Volver al carrito" /></button>
        </div>
        }
    </main>
};

export default Checkout;