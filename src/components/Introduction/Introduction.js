import React from "react";
import classes from './Introduction.module.css';

function Introduction() {
  return (
    <div className={`container-fluid ${classes.title}`}>
      <div className="row">
        <div className="col-md-6">
          <h4>Hello, I'm</h4>
          <h1 className={classes.titleBig}>Js Fong</h1>
          <p>Software engineer based in Singapore</p>
        </div>
        <div className="col-md-6">
          <img className={classes.titleImg} src="https://via.placeholder.com/150"></img>
        </div>
      </div>
    </div>
  );
}

export default Introduction;