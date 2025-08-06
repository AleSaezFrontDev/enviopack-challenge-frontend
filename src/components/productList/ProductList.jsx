import React from "react";
import products from "../../data/products.json";
import Product from "../product/Product";
import Filters from "../filters/Filters";
import Title from "../title";

const ProductList = () => {

    const {productos} = products;

    return <main>
    <Title text="Catalogo" />
    <Filters />
    {productos.map((producto) => <Product producto={producto} />)}
    </main>
};

export default ProductList;