import React, {useState, useContext } from "react";

import Button from "../UI/Button/Button";

import CartContext from "../../context/CartContext";


const MenuItemForm = (props) => {

    const [amount, setAmount] = useState(1);

	const cartCtx = useContext(CartContext);

	const handleChange = (e) => {
		setAmount(e.target.value);

        
	};


	
    const handleSubmit = (e) => {
		e.preventDefault();

		setAmount(1);
    }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label className='sr-only'>Amount</label>
					<input
						type='number'
						value={amount}
						onChange={handleChange}
					/>
				</div>
				<Button text='add to cart' />
			</form>
		</div>
	);
};

export default MenuItemForm;
