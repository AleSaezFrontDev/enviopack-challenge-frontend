import React from "react";
import Product from "../product/Product";
import Filters from "../filters/Filters";
import Title from "../title";
import Pagination from "../pagination";
import AddToCartButton from "../addToCartButton/AddToCartButton";

const ProductList = ({productos}) => {

    return <main>
    <Title text="Catalogo" />
    <Filters />
        <div>
      <ul>
        {productos.map((product) => <div key={product.id}><Product product={product} /><AddToCartButton product={product}/></div>)}
      </ul>
    </div>
    <Pagination />
    </main>
};

export default ProductList;