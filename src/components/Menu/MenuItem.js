import React from "react";
import Button from "../UI/Button/Button";

import './MenuItem.css';

const MenuItem = props => {
    /*
        On Button click:
            - Add amount, title, and cost of item to the cart
            - Update the amount if more is added
            - Update the cart total
    */ 
    const handleClick = () => {
        
    }
    return(
            <li className="menu-item">
                <div>
                    <h2 className="menu-item__title">{props.title}</h2>
                    <p className="menu-item__description">{props.description}</p>
                    <p className="menu-item__price">{props.cost}</p>
                </div>
                <div>
                    <div>
                        <label className="sr-only">Amount</label>
                        <input type="number" value="1" />
                    </div>
                    <Button buttonClick={handleClick} text="add to cart"/>
                </div>
            </li>
    )
}

export default MenuItem;