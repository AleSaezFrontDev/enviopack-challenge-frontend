import React from "react";
import { useFilter } from "../../customHooks/useFilter";

const Filters = () => {

    const {setInputValue} = useFilter();

    return <div>
        <input onChange={({target}) => setInputValue(target.value)} placeholder="Buscar productos por nombre"></input>
        <span>Ordenar por</span>
        <select>
            <option>Seleccionar</option>
        </select>
    </div>
};

export default Filters;