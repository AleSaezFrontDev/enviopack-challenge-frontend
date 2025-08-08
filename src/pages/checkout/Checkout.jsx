import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Checkout = () => {

    const {totalPurchase, setAddedProduct, setTotalPurchase} = useContext(CartContext);
    const {userCredit, setUserCredit} = useContext(UserContext);
    const [result, setResult] = useState(undefined);

    useEffect(() => {
        if(userCredit >= totalPurchase) {
            setResult(true);
            setAddedProduct([]);
            setTotalPurchase(0);
            setUserCredit(userCredit - totalPurchase);
        }
        else setResult(false);
    }, []);

    return <main>
        <h1>Estado de la Compra</h1>
        {result ?
        <>
        <span>La compra se realizo con exito</span>
        <Link to={"/cart"}>volver al catalogo</Link>
        </>
        :
        <>
        <span>Ocurrio un error con la compra, revisa que el importe no supere el credito disponible en tu cuenta</span>
        <Link to={"/cart"}>Volver al carrito</Link>
        </>
        }
    </main>
};

export default Checkout;