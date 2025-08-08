import React, {useContext} from "react";
import { FilterContext } from "../../context/FilterContext";

const Filters = () => {

    const {setInputValue, setSelect} = useContext(FilterContext);

    return <div>
        <input onChange={({target}) => {
            if(target.value !== "") setInputValue(target.value);
            else setInputValue(1);
            
        }} placeholder="Buscar productos por nombre"></input>
        <span>Ordenar por</span>
        <select onChange={({target}) => {
            setSelect(Number(target.value));
        }}>
            <option value={0}>Seleccionar</option>
            <option value={2}>Mas baratos</option>
            <option value={1}>mas caros</option>
        </select>
    </div>
};

export default Filters;