import { createContext, useState } from "react";

const CartContext = createContext({
    cartItems: [],
    totalAmount: 0,
    onAddToCart: (item) => {},
    onRemoveFromCart: (id) => {}
});

export default CartContext;