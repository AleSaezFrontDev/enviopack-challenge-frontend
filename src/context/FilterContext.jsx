import React, {createContext, useEffect, useState} from "react";
import {paginatedProducts} from "../functions";
import productos from "../data/products.json";

export const FilterContext = createContext();

const FilterProvider = ({children}) => {

    const PRODUCTS_PER_PAGE = 6;
    const [inputValue, setInputValue] = useState("");
    const [renderProducts, setRenderProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [select, setSelect] = useState(0);
    const [total, setTotal] = useState(Math.ceil(productos.productos.length / PRODUCTS_PER_PAGE));

    const handleBack = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < total) setPage(page + 1);
    };

    const onFilter = () => {
        let productCopy = [...productos.productos];
        if(inputValue && inputValue !== 1) {
            // el 1 solo es para forzar a que se reinicie el listado y paginado en caso que haya eliminado el texto escrito en el buscador
           productCopy = productCopy.filter((product) => product.title.toLowerCase().includes(inputValue.toLowerCase()));
        };

        if (select === 1) {
        productCopy.sort((a, b) => b.price - a.price);
        } else if (select === 2) {
        productCopy.sort((a, b) => a.price - b.price);
        };

        setTotal(Math.ceil(productCopy.length / PRODUCTS_PER_PAGE));

        const paginated = paginatedProducts(page, { productos: productCopy });
        setRenderProducts(paginated);
    };

    useEffect(() => {
        onFilter();
    }, [inputValue, page, select]);

    return <FilterContext.Provider value={{productos, renderProducts, page, total, inputValue, setPage, handleBack, handleNext, setInputValue, setSelect}}>
        {children}
    </FilterContext.Provider>
};

export default FilterProvider;

    // useEffect(() => {
    //     !inputValue ? refreshProducts() : refreshProducts(productsFilters);
    // }, [page]);

    // const refreshProducts = (data = productos, currentPage = page) => {
    //     const newProducts = paginatedProducts(currentPage, data);
    //     setRenderProducts(newProducts);
    // };

    // const switchSelect = (data, caso) => {
    //     const newData = [...data];
    //     switch(caso) {
    //         case 0: setRenderProducts(newData); break;
    //         case 1: setRenderProducts(newData.sort((a, b) => b.price - a.price)); break;
    //         case 2: setRenderProducts(newData.sort((a, b) => a.price - b.price)); break;
    //     };
    // };

    // const onHandleSelect = (value) => {
    //     if(inputValue) {
    //         switchSelect(productsFilters.productos, value);
    //     } else {
    //         switchSelect(productos.productos, value);
    //     };
    // };