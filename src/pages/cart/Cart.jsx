import React from "react";

const Cart = () => {

    return <main>
        <h1>Carrito</h1>
        <ul>
            <li><span>Producto 1</span><button>Eliminar</button></li>
            <li><span>Producto 2</span><button>Eliminar</button></li>
        </ul>
        <span>Total $20.000</span>

        <button>Volver al catalogo</button> <button>Finalizar Compra</button>
    </main>
};

export default Cart;