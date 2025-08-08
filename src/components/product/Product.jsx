import React from "react";
import image from "../../../public/img/image-product.jpg";
import AddToCartButton from "../addToCartButton/AddToCartButton";

const Product = ({product}) => {

    return (
        <>
        <img src={image} width={100} height={150} />
            <h3>{product?.title}</h3>
            <h3>{product?.price}</h3>
        </>
    )
};

export default Product;