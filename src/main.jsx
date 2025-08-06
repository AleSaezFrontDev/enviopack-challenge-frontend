import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from "./pages/cart"
import Checkout from "./pages/checkout"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from './context/cartContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
  <RouterProvider router={router} />
  </CartProvider>
);
