import { useReducer } from "react";
import CartContext from "./CartContext"

const defaultCart = {
    cartItems: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    return defaultCart;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer({
        cartReducer,
        defaultCart
    });

    const handleAddToCart = (item) => {
        dispatchCartAction({
            type: "ADD",
            item: item
        })
    };

    const handleRemoveFromCart = (id) => {
        dispatchCartAction({
            type: "REMOVE",
            id: id
        })
    }
    
    const crtContext = {
        cartItems: cartState.cartItems,
        totalAmount: cartState.totalAmount,
        onAddToCart: handleAddToCart,
        onRemoveFromCart: handleRemoveFromCart
    }
    return(
        <CartContext.Provider value={crtContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider