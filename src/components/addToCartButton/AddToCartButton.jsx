import React, {useContext} from "react";
import { CartContext } from "../../context/cartContext";
import Links from "../links";
import styles from "./addToCartButton.module.css";

const AddToCartButton = ({product}) => {

    const {addedProduct, setAddedProduct} = useContext(CartContext);
    const {addToCartButton} = styles;

    const handleChange = () => {
        setAddedProduct([...addedProduct, {...product}]);
    };

    return <>
        {addedProduct.find((({id}) => id === product.id)) ? <button className={addToCartButton}><Links to={"/cart"} text="Ver carrito" /></button> : <button className={addToCartButton} onClick={handleChange}>Agregar al carrito</button>}
    </>
};

export default AddToCartButton;