import React from "react";
import classes from './Contact.module.css';

function Contact() {
    return (
        <div id="contact" className={classes.contactSection}>
            <h2 className={classes.contactTitle}>Get In Touch</h2>
            <p>If you have any questions or just want to say hello, feel free to drop me an email.  😄</p>

            <a type="button" className={`btn btn-dark btn-md ${classes.button}`}
                href="https://docs.google.com/document/d/1eBOD8U8qu6kdiChiqK8sOngw5JT3D5LBFuMV5DbEXEM/edit?usp=sharing"
                target="_blank">

                <i className="far fa-file-pdf"></i>
                &nbsp; Download CV
            </a>

            <a className={`btn btn-dark btn-md ${classes.button}`} href="mailto:jsfong5105@gmail.com">
                <i class="far fa-envelope"></i> &nbsp;Contact Me
            </a>
        </div>
    );


}

export default Contact;