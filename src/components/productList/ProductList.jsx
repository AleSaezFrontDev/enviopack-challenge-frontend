import React from "react";
import Product from "../product/Product";
import Filters from "../filters/Filters";
import Title from "../title";
import Pagination from "../pagination";
import usePagination from "../../customHooks/usePagination";
import { useFilter } from "../../customHooks/useFilter";

const ProductList = () => {

    const pagination = usePagination();
    const {filteredProducts} = useFilter();
    const {productos} = pagination;
    // pagination debe enviarse desde este componente a los hijos para que compartan los mismos datos, por eso lo dejo aca.
    
    return <main>
    <Title text="Catalogo" />
    <Filters />
        <div>
      <ul>
        {
          filteredProducts.length > 0 ?
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
        ))
        :
          productos.map((product) => (
            <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
    <Pagination pagination={{...pagination}}/>
    </main>
};

export default ProductList;