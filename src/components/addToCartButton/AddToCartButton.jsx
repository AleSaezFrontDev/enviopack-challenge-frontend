import React, {useContext} from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const AddToCartButton = ({product}) => {

    const {addedProduct, setAddedProduct} = useContext(CartContext);

    const handleChange = () => {
        setAddedProduct([...addedProduct, {...product}]);
    };

    return <>
        {addedProduct.find((({id}) => id === product.id)) ? <Link to={"/cart"}>Ver carrito</Link> : <button onClick={handleChange}>Agregar al carrito</button>}
    </>
};

export default AddToCartButton;