// App.jsx
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Checkout from "./pages/checkout"
import Header from './components/header/Header'
import Catalog from './pages/catalog'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
};

export default App;
