import React from "react";
    /* Header component includes logo + cart
            - cart is a modal includes ability to change amount
            - clone btn, order btn (alerts ordering)
            - cart subtotal
      */
const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				<h1>Ye Olde Chocolate Shoppe</h1>
			</div>
            <div className="cart-container">
                cart here
            </div>
		</div>
	);
};

export default Header;
