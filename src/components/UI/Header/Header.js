import React from "react";
import Cart from "../../Cart/Cart";


import './Header.css';
    /* Header component includes logo + cart
            - cart is a modal includes ability to change amount
            - clone btn, order btn (alerts ordering)
            - cart subtotal
      */
const Header = props => {
	return (
		<header className='header'>
            <div className='header-inner'>
                <div className='logo'>
                    <h1>Ye Olde <br/>Chocolate Shoppe</h1>
                </div>
                <Cart items={props.cartItems}/>
            </div>
		</header>
	);
};

export default Header;
