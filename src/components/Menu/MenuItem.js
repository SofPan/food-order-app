import React, { useState } from "react";
import Button from "../UI/Button/Button";

import "./MenuItem.css";
import ListItem from "../UI/ListItem/ListItem";

const MenuItem = (props) => {
	const [amount, setAmount] = useState(1);

    const itemDetails = {
        title: props.title,
        cost: props.cost,
		id: props.id,
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
