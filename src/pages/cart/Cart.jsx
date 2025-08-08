import React, {useContext, useEffect} from "react";
import { CartContext } from "../../context/cartContext";
import Product from "../../components/product/Product";
import { Link } from "react-router-dom";

const Cart = () => {

    const {addedProduct, setAddedProduct, setTotalPurchase, totalPurchase} = useContext(CartContext);

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

    return <main>
        <h1>Carrito</h1>
        {addedProduct.length > 0 ? addedProduct.map((product => <div key={product.id}><Product product={product} /><button onClick={() => handleDelete(product.id)}>Eliminar</button></div>)) : <h4>Carrito vacio</h4>}
        <span>{`Total $${totalPurchase}`}</span>
        <Link to={"/"}>Volver al catalogo</Link>
        {addedProduct.length > 0 && <Link to={"/checkout"}>Finalizar compra</Link>}
    </main>
};

export default Cart;