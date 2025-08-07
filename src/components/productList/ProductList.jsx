import React from "react";
import Product from "../product/Product";
import Filters from "../filters/Filters";
import Title from "../title";
import Pagination from "../pagination";

const ProductList = ({productos}) => {

    return <main>
    <Title text="Catalogo" />
    <Filters />
        <div>
      <ul>
        {productos.map((product) => <Product key={product.id} product={product} />)}
      </ul>
    </div>
    <Pagination />
    </main>
};

export default ProductList;