import React from "react";

import './Modal.css';
import Button from "../Button/Button";

const Modal = props => {
    return (
    <div className="modal">
        <div className="modal-inner">
            <div className="cart-items">
                <ul className="cart-items__list">
                    {props.items.map((item) => {
                        return(
                            <li key={Math.random()}>
                                <h2>{item.title}</h2>
                                <p>{item.cost}</p>
                                <p>{item.amount}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="cart-interactions">
                <Button buttonClick={props.onCancel} text="cancel"/>
            </div>
        </div>
    </div>
    )
}

export default Modal;