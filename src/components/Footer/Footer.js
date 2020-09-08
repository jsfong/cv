import React from "react";
import classes from './Footer.module.css';

function Footer() {

    const year = new Date().getFullYear();

    console.log(year);
    return (
        <div className={classes.footerSection} id="footer">
            <div className="container-fluid">
                <a href="https://www.linkedin.com/in/js-fong-52a04534/" target="_blank">
                    <i className={`fab fa-linkedin ${classes.socialIcon}`}></i>
                </a>

                <a href="https://github.com/jsfong" target="_blank">
                    <i className={`fab fa-github ${classes.socialIcon}`}></i>
                </a>

                <a href="mailto:jsfong5105@gmail.com">
                    <i className={`fas fa-envelope ${classes.socialIcon}`}></i>
                </a>

                <p className={classes.copyright}>© Copyright {year} JsFong</p>
            </div>
        </div>
    );


}

export default Footer;