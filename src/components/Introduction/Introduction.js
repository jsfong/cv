import React from "react";
import classes from './Introduction.module.css';

function Introduction() {
  return (
    <div className={`container-fluid ${classes.title}`}>
      <div className="row">
        <div className="col-md-6">
          <h4 className={classes.titleHello}>Hello, I'm</h4>
          <h1 className={classes.titleBig}>Js Fong</h1>
          <p>Software engineer based in Singapore</p>
          <button type="button" className={`btn btn-dark btn-lg ${classes.downloadButton}`} href="#" >
            <i className="far fa-file-pdf"></i>
            &nbsp; Download CV
          </button>
          <a className={`btn btn-dark btn-lg ${classes.downloadButton}`} href="mailto:jsfong5105@gmail.com"><i class="far fa-envelope"></i> &nbsp;Contact Me</a>
        </div>
        <div className="col-md-6">
          <img className={classes.titleImg} src="https://via.placeholder.com/250" alt="Place holder"></img>
        </div>
      </div>
    </div>
  );
}

export default Introduction;