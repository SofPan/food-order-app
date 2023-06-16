import React from "react";

import './Modal.css';
import Button from "../Button/Button";

const Modal = props => {
    return (
    <div className="modal">
        <div className="modal-inner">
            <div className="cart-items">

            </div>
            <div className="cart-interactions">
                <Button buttonClick={props.onCancel} text="cancel"/>
            </div>
        </div>
    </div>
    )
}

export default Modal;