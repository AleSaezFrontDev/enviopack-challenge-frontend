import React from "react";
import Product from "../product/Product";
import Filters from "../filters/Filters";
import Title from "../title";
import Pagination from "../pagination";
import AddToCartButton from "../addToCartButton/AddToCartButton";
import styles from "./productList.module.css";

const ProductList = ({productos}) => {

  const {productsContainer, productsDiv, productsUl} = styles;

    return <div className={productsContainer}>
    <Title text="Catálogo" />
    <Filters />
        <div>
      <ul className={productsUl}>
        {productos.map((product) => <div className={productsDiv} key={product.id}><Product product={product} /><AddToCartButton product={product}/></div>)}
      </ul>
    </div>
    <Pagination />
    </div>
};

export default ProductList;