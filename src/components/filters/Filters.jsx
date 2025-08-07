import React from "react";

const Filters = ({filters}) => {

    const {setInputValue} = filters;

    return <div>
        <input onChange={({target}) => setInputValue(target.value)} placeholder="Buscar productos por nombre"></input>
        <span>Ordenar por</span>
        <select>
            <option>Seleccionar</option>
        </select>
    </div>
};

export default Filters;