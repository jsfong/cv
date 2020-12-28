import React from "react";
import classes from './Points.module.css';

function generatePoint(point){
    const totalPoint = 5;
    let displayPoint =point;
    if(displayPoint > totalPoint){
        displayPoint = totalPoint;
    }
  
    let pointsArray=[];
    for (let i=0; i<displayPoint; i++){
        pointsArray.push(<i className={`fas fa-circle fa-xs ${classes.point}`}></i>);
    }
    for (let i=0; i<(totalPoint - displayPoint); i++){
        pointsArray.push(<i className={`far fa-circle fa-xs ${classes.point}`}></i>);
    } 
    
    return(pointsArray);   
}


function Points(props){
  
    return(
        <div className={` ${classes.skillPoint}`}>
            {generatePoint(props.point)}
        </div>
    );
}

export default Points;