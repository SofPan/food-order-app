import React from "react";

import './ListItem.css';

const ListItem = props => {
    return(
        <div className="list-item">
            <h2 className="list-item__title">{props.title}</h2>
            {props.description ? (<p className="list-item__description">{props.description}</p>) : null}
            <p className="list-item__cost">${props.cost}</p>
        </div>
    )
}

export default ListItem;