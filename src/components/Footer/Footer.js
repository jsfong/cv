import React from "react";
import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className="white-section" id="footer">
            <div className="container-fluid">
                <i className={`fab fa-linkedin ${classes.socialIcon}`}></i>
                <i className={`fab fa-github ${classes.socialIcon}`}></i>
                <i className={`fas fa-envelope ${classes.socialIcon}`}></i>
                <p>© Copyright 2018 JsFong</p>
            </div>
        </footer>
    );


}

export default Footer;