import React, {useContext} from "react";
import { FilterContext } from "../../context/FilterContext";

const Filters = () => {

    const {setInputValue} = useContext(FilterContext);

    return <div>
        <input onChange={({target}) => {
            if(target.value !== "") setInputValue(target.value);
            else setInputValue(1);
            
        }} placeholder="Buscar productos por nombre"></input>
        <span>Ordenar por</span>
        <select>
            <option>Seleccionar</option>
            <option>Mas baratos</option>
            <option>mas caros</option>
        </select>
    </div>
};

export default Filters;