import React from "react";
function Features(props) {
    return (
        <div className={`col-lg-4`}>
            <i className={`${props.icon} icon`}></i>
            <h3 className={`featureTitle`}>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )

}

export default Features;