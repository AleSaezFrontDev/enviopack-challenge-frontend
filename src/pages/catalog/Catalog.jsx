import React, {useContext} from "react";
import ProductList from "../../components/productList";
import { FilterContext } from "../../context/FilterContext";

const Catalog = () => {
    
    const {renderProducts} = useContext(FilterContext);

    return <ProductList productos={renderProducts} />
};

export default Catalog;