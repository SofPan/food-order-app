import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

import './Cart.css';

const Cart = props => {
    const [viewCart, setViewCart] = useState(false);

    const handleClick = () => {
        setViewCart(!viewCart);
    }

    return(
        <div className="cart-container">
            <Button buttonClick={handleClick} text="Cart"/>
            {viewCart ? (<Modal onCancel={handleClick}/>) : ''};        
        </div>
    )
}

export default Cart;