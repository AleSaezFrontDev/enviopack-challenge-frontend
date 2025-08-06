import React, {useContext} from "react";
import { CartContext } from "../../context/cartContext";

const AddToCartButton = ({product}) => {

    const {addedProduct, setAddedProduct} = useContext(CartContext);

    const handleChange = () => {
        setAddedProduct([...addedProduct, {...product}]);
    };

    return <>
        {addedProduct.find((({id}) => id === product.id)) ? <button>Ver Carrito</button> : <button onClick={handleChange}>Agregar al carrito</button>}
    </>
};

export default AddToCartButton;