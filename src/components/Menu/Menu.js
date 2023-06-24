import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

const MENU_ITEMS = [
	{
		id: "00",
		title: "Premium mixed box",
		description: "48 pieces of our top-tier chocolates",
		cost: 57,
	},
	{
		id: "01",
		title: "White Chocolate Truffle",
		description: "12 pieces of Heaven in one box",
		cost: 23.5,
	},
	{
		id: "02",
		title: "Bag of Chocolate Covered Almonds",
		description:
			"2 pounds of our premium roasted almonds coated in milk chocolate",
		cost: 18.99,
	},
	{
		id: "03",
		title: "Mystery Mix",
		description: "Includes classic favorites and new delights",
		cost: 15,
	},
];

const Menu = () => {
	const populateMenu = (
		<ul className='menu-item__list'>
			{MENU_ITEMS.map((item) => {
				return (
					<MenuItem
						key={item.id}
						id={item.id}
						title={item.title}
						description={item.description}
						cost={item.cost}
					/>
				);
			})}
		</ul>
	);

	return (
		<div className='menu'>
			<div className='menu-inner'>
                {populateMenu}
			</div>
		</div>
	);
};

export default Menu;
