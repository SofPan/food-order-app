import React, { useState } from "react";
import Button from "../UI/Button/Button";

import "./MenuItem.css";

const MenuItem = (props) => {
	const [amount, setAmount] = useState(1);

    const itemDetails = {
        title: props.title,
        cost: props.cost,
        amount: amount,
    }
	const handleChange = (e) => {
		setAmount(e.target.value);
	};

    const handleSubmit = (e) => {
        e.preventDefault();
        props.newCartItem(itemDetails);
        setAmount(1);
    }
	return (
		<li className='menu-item'>
			<div>
				<h2 className='menu-item__title'>{props.title}</h2>
				<p className='menu-item__description'>{props.description}</p>
				<p className='menu-item__price'>${props.cost}</p>
			</div>
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
