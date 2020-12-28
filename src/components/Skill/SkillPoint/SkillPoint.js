import React from "react";
import classes from './SkillPoint.module.css';
import Points from './Points';


function SkillPoint(props) {

    return (
        <div className={`col-md-6 ${classes.skill}`}>
            <div className={`${classes.skillNameBox}`}>
            <p className={`${classes.skillName}`}>{props.name}</p>
            </div>
            <Points point={props.point} />
        </div>
    );
}

export default SkillPoint;