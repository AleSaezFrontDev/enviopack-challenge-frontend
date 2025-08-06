import React from "react";
import image from "../../../public/img/image-product.jpg"

const Product = ({producto}) => {

    return (
        <>
        <img src={image} width={100} height={150} />
            <h3>{producto.title}</h3>
            <h3>{producto.price}</h3>
            <button>Agregar al carrito</button>
        </>
    )
};

export default Product;