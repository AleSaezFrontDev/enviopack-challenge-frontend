import React from "react";
import ProductList from "../../components/productList";
import { getProducts, serializeProducts } from "../../functions";

const Catalog = () => {
    const {productos} = getProducts();
    // normalmente getProducts se ejecutaria en un useEffect pero en este caso no es asincronica la obtencion de datos asique no hace falta
    const productsPaginated = serializeProducts(productos);
    // rompo el array para simular los seis resultados
    
    return <ProductList productos={productsPaginated} />
};

export default Catalog;