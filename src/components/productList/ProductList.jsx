import React, { useState } from "react";
import Product from "../product/Product";
import Filters from "../filters/Filters";
import Title from "../title";
import Pagination from "../pagination";
import usePagination from "../../customHooks/usePagination";
import { useFilter } from "../../customHooks/useFilter";

const ProductList = ({productos = []}) => {

    const [renderProducts, setRenderProducts] = useState(productos);
    const pagination = usePagination(setRenderProducts);
    const filters = useFilter(setRenderProducts);

    return <main>
    <Title text="Catalogo" />
    <Filters filters={{...filters}} />
        <div>
      <ul>
        {renderProducts.map((product) => <Product key={product.id} product={product} />)}
      </ul>
    </div>
    <Pagination pagination={{...pagination}}/>
    </main>
};

export default ProductList;