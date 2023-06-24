import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/UI/Header/Header';
import './index.css';
import CartProvider from './context/CartProvider';

const MENU_ITEMS = [
  {
    id: "00",
    title: "Premium mixed box",
    description: "48 pieces of our top-tier chocolates",
    cost: 57
  },
  {
    id: "01",
    title: "White Chocolate Truffle",
    description: "12 pieces of Heaven in one box",
    cost: 23.50
  },
  {
    id: "02",
    title: "Bag of Chocolate Covered Almonds",
    description: "2 pounds of our premium roasted almonds coated in milk chocolate",
    cost: 18.99
  },
  {
    id: "03",
    title: "Mystery Mix",
    description: "Includes classic favorites and new delights",
    cost: 15
  },
]

function App() {
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   setCartItems((prevItems) => {
  //     return [...prevItems, item];
  //   });
    
  // }

  return (
    <CartProvider>
      <Header />
      <Menu items={MENU_ITEMS}/>
    </CartProvider>
  );
}

export default App;
