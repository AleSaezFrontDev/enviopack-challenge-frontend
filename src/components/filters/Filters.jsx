import React, {useContext} from "react";
import { FilterContext } from "../../context/FilterContext";
import styles from "./filters.module.css";

const Filters = () => {

    const {setInputValue, setSelect} = useContext(FilterContext);
    const {filtersDiv, searchInput, sortBy, sortBySpan, sortBySelect} = styles;

    return <div className={filtersDiv}>
        <input className={searchInput} onChange={({target}) => {
            if(target.value !== "") setInputValue(target.value);
            else setInputValue(1);
            
        }} type="text" placeholder="Buscar productos por nombre"></input>
        <div className={sortBy}>
        <span className={sortBySpan}>ORDENAR POR</span>
        <select className={sortBySelect} onChange={({target}) => {
            setSelect(Number(target.value));
        }}>
            <option value={0}>Seleccionar</option>
            <option value={2}>Más baratos</option>
            <option value={1}>Más caros</option>
        </select>
        </div>
    </div>
};

export default Filters;