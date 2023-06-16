import React from "react";
import Button from "../UI/Button/Button";


const MenuItem = props => {
    return(
            <li>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.cost}</p>
                </div>
                <div>
                    <div>
                        <label>Amount</label>
                        <input type="number" value="1" />
                    </div>
                    <Button text="add to cart"/>
                </div>
            </li>
    )
}

export default MenuItem;