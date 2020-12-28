import React from "react";
import classes from './Features.module.css'

function Features(props) {
    return (
        <div className={`col-md-6 col-lg-4 ${classes.box}`}>
            <i className={`${props.icon}  ${classes.icon}`}></i>
            <h4 className={`${classes.title}`}>{props.title}</h4>
            <p className={`${classes.description}`}>{props.description}</p>
        </div>
    )

}

export default Features;