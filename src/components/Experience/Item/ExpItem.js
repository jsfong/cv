import React from "react";
import classes from './ExpItem.module.css';

function ExpItem(props) {
    return (
        <div>
            <h4 className={`${classes.title}`}>{props.title}</h4>
            <p className={`${classes.data}`}>{props.date}</p>
            <p className={`${classes.description}`}>{props.description}</p>
        </div>

    );
}

export default ExpItem;