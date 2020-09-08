import React from "react";
import classes from './ExpItem.module.css';

function ExpItem(props) {
    return (
        <div>
            <h4 className={`${classes.title}`}>
                {props.title} 
                <span className={`${classes.seperator}`}>|</span>
                <span className={`${classes.date}`}>{props.date}</span>
            </h4>
            <p className={`${classes.description}`}>{props.description}</p>
        </div>

    );
}

export default ExpItem;