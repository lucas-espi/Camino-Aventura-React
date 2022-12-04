import './App.css';
import React from 'react';
import Navbar from './components/header/index';
import Inicio from "./pages/inicio/index";
import Detalle from './pages/detalle';
import Cart from './pages/cart';
import { Route, Routes } from "react-router-dom";
import CartProvider from './components/assets/cartContext';
import Footer from './components/footer';





function App() {

  return (
    <div className="App">
      <CartProvider>
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<Inicio/>} />
              <Route exact path="/detalle/:productID" element={<Detalle/>} />
              <Route exact path="/cart" element={<Cart/>} />
            </Routes>
          <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
