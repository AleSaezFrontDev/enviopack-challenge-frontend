import React from "react";

const Checkout = ({exito = undefined}) => {

    return <main>
        <h1>Estado de la Compra</h1>
        <span>{exito ? "La compra se realizo con exito" : "Hubo un error"}</span>
        <button>{exito ? "volver al catalogo" : "volver al carrito"}</button>
    </main>
};

export default Checkout;