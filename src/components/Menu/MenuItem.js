import ListItem from "../UI/ListItem/ListItem";
import MenuItemForm from "./MenuItemForm";

import "./MenuItem.css";

const MenuItem = (props) => {

	return (
		<li key={props.id} className='menu-item'>
			<ListItem title={props.title} description={props.description} cost={props.cost}/>
			<MenuItemForm />
		</li>
	);
};

export default MenuItem;
