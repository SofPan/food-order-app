import React from "react";
import './Menu.css';
import MenuItem from "./MenuItem";

/* 
    Menu component includes menu items, cost, amount input, add to cart button 
*/

const Menu = props => {

    return(
        <div className="menu">
            <div className="menu-inner">
                <ul className="menu-item__list">
                    {props.items.map((item) => {
                        return <MenuItem key={item.id} title={item.title} cost={item.cost} />
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Menu;