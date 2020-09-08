import React from "react";
import classes from './Introduction.module.css';

function Introduction() {
  return (
    <div className={`container-fluid ${classes.title}`}>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <h4 className={classes.titleHello}>Hello, I'm</h4>
          <h1 className={classes.titleBig}>Js Fong</h1>
          <p className={classes.description}>Software engineer based in Singapore</p>
          <a type="button" className={`btn btn-dark btn-lg ${classes.downloadButton}`}
            href="https://docs.google.com/document/d/1eBOD8U8qu6kdiChiqK8sOngw5JT3D5LBFuMV5DbEXEM/edit?usp=sharing"
            target="_blank" >
            <i className="far fa-file-pdf"></i>
            &nbsp; Download CV
          </a>
          <a className={`btn btn-dark btn-lg ${classes.downloadButton}`} href="mailto:jsfong5105@gmail.com"><i class="far fa-envelope"></i> &nbsp;Contact Me</a>
        </div>
        <div className="col-md-6 col-lg-6">
          <img className={classes.titleImg} src="https://via.placeholder.com/250" alt="Place holder"></img>
        </div>
      </div>
    </div>
  );
}

export default Introduction;