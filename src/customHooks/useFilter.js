import React, {useEffect, useState} from "react";
import productos from "../data/products.json";

export const useFilter = (setRenderProducts) => {

    const [inputValue, setInputValue] = useState(null);

    const onFilter = () => {
      const filter = productos.productos.filter((product) => product.title.toLowerCase().includes(inputValue));
      setRenderProducts && setRenderProducts(filter || []);
    };

    useEffect(() => {
        inputValue && onFilter();
    }, [inputValue]);

    return {inputValue, setInputValue};
};