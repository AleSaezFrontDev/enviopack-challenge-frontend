import React, {useEffect, useState} from "react";
import { paginatedProducts } from "../functions";
import products from "../data/products.json";

const usePagination = () => {
    const [page, setPage] = useState(1);
    const [productos, setProductos] = useState([]);
    const PRODUCTS_PER_PAGE = 6;
    const total = Math.ceil(products.productos.length / PRODUCTS_PER_PAGE);

    const refreshProducts = () => {
        const newProducts = paginatedProducts(page);
        setProductos(newProducts);
    };

    const handleBack = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < total) setPage(page + 1);
    };

    useEffect(() => {
        refreshProducts();
    }, [page]);

    return {page, setPage, total, productos, setProductos, handleBack, handleNext}
};

export default usePagination;