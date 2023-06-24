import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/UI/Header/Header';
import './index.css';
import CartProvider from './context/CartProvider';

function App() {

  return (
    <CartProvider>
      <Header />
      <Menu />
    </CartProvider>
  );
}

export default App;
