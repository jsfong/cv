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
          <img className={classes.titleImg} src="data:image/png;base64,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" alt="Place holder"></img>
        </div>
      </div>
    </div>    
  );
}

export default Introduction;