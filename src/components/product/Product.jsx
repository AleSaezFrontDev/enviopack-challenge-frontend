import React from "react";
import image from "../../../public/img/image-product.jpg";
import styles from "./product.module.css";

const Product = ({product, cart = false}) => {

    const {productDiv, productImg, productTitle, cartDiv, cartImg, cartTitle, onlyCartStyle} = styles;

    return (
        <>
        <div className={cart ? cartDiv : productDiv}>
            <img className={cart ? cartImg : productImg} src={image} />
            <div className={cart ? onlyCartStyle : null}>
                <p className={cart ? cartTitle : productTitle}>{product?.title}</p>
                <p className={cart ? cartTitle : productTitle}>$ {product?.price}</p>
            </div>
        </div>
        </>
    )
};

export default Product;