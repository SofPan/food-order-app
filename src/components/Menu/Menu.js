import React from "react";
import './Menu.css';
import MenuItem from "./MenuItem";

const Menu = props => {
    const newCartItem = (item) => {
        props.addToCart(item);
    }
    return(
        <div className="menu">
            <div className="menu-inner">
                <ul className="menu-item__list">
                    {props.items.map((item) => {
                        return <MenuItem key={item.id} newCartItem={newCartItem} id={item.id} title={item.title} description={item.description} cost={item.cost} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Menu;