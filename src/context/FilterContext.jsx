import React, {createContext, useEffect, useState} from "react";
import {paginatedProducts} from "../functions";
import productos from "../data/products.json";

export const FilterContext = createContext();

const FilterProvider = ({children}) => {

    const PRODUCTS_PER_PAGE = 6;
    // normalmente esta funcion iria en un useEffect o useCallback pero en este caso no es asincronica asique directamente traigo la data
    const [inputValue, setInputValue] = useState("");
    const [renderProducts, setRenderProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [productsFilters, setProductsFilters] = useState([]);
    const [total, setTotal] = useState(Math.ceil(productos.productos.length / PRODUCTS_PER_PAGE));

    const refreshProducts = (data = productos, currentPage = page) => {
        const newProducts = paginatedProducts(currentPage, data);
        setRenderProducts(newProducts);
    };

    const handleBack = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < total) setPage(page + 1);
    };

    const onFilter = () => {
        if(inputValue === 1) {
            // el 1 solo es para forzar a que se reinicie el listado y paginado en caso que haya eliminado el texto escrito en el buscador
            refreshProducts(undefined, 1);
            setPage(1);
            setTotal(Math.ceil(productos.productos.length / PRODUCTS_PER_PAGE));
            setProductsFilters([]);
            setInputValue("");
        } else {
            const filter = productos.productos.filter((product) => product.title.toLowerCase().includes(inputValue));
            setProductsFilters({productos: filter});
            refreshProducts({productos: filter}, 1);
            setPage(1);
            setTotal(Math.ceil(filter.length / PRODUCTS_PER_PAGE));
        }
    };

    useEffect(() => {
        !inputValue ? refreshProducts() : refreshProducts(productsFilters);
    }, [page]);

    useEffect(() => {
        inputValue && onFilter();
    }, [inputValue]);

    return <FilterContext.Provider value={{productos, renderProducts, page, total, inputValue, setPage, handleBack, handleNext, setInputValue}}>
        {children}
    </FilterContext.Provider>
};

export default FilterProvider;