import CartContext from "./CartContext"

const defaultCart = {
    cartItems: [],
    totalAmount: 0
}

const CartProvider = props => {

    

    const handleAddToCart = (item) => {

    };

    const handleRemoveFromCart = (id) => {

    }
    const crtContext = {
        cartItems: [],
        totalAmount: 0,
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