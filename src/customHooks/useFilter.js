import React, {useEffect, useState} from "react";
import productos from "../data/products.json";

export const useFilter = () => {

    const [inputValue, setInputValue] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const onFilter = () => {
      const filter = productos.productos.filter((product) => product.title.toLowerCase().includes(inputValue));
      setFilteredProducts(filter || []);
    };
console.log(filteredProducts);

    useEffect(() => {
        onFilter();
    }, [inputValue]);

    return {inputValue, setInputValue, filteredProducts};
};