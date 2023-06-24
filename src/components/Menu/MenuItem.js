import React, { useEffect, useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import Button from "../UI/Button/Button";

import "./MenuItem.css";
import ListItem from "../UI/ListItem/ListItem";

const MenuItem = (props) => {
	const title = props.title;
	const id = props.id;
	const cost = props.cost;

	const [amount, setAmount] = useState(1);
	const [itemDetails, setItemDetails] = useState({
			title: title,
			id: id,
			cost: cost,
			amount: amount
	});

	const cartCtx = useContext(CartContext);

	const handleChange = (e) => {
		setAmount(e.target.value);
	};

	useEffect(() => {
		setItemDetails((prevDetails) => {
			return {...prevDetails, amount: amount}
		});
	}, [amount, setItemDetails]);

	
    const handleSubmit = (e) => {
		e.preventDefault();
        // props.newCartItem(itemDetails);
		cartCtx.onAddToCart(itemDetails);
        setAmount(1);
    }


	return (
		<li key={props.id} className='menu-item'>
			<ListItem title={props.title} description={props.description} cost={props.cost}/>
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
					<Button
						text='add to cart'
					/>
				</form>
			</div>
		</li>
	);
};

export default MenuItem;
