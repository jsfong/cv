import React from "react";
import classes from './Navigation.module.css';
import NavBarListItem from "./NavBarListItem";


function NavBar() {
  return (

    <nav className={`navbar navbar-expand-lg bg-light"  ${classes.NavBar}`}>
      <a className={`navbar-brand ${classes.NavBarBrand}`} href="#">Js</a>
      <button className={`navbar-toggler`} type="button" data-toggle="collapse" data-target="#navbarToggler">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ml-auto">       
          <NavBarListItem text="Skill" link="#skill" />
          <NavBarListItem text="Experience" link="#experience" />
          <NavBarListItem text="Contact" link="#contact" />
        </ul>

      </div>

    </nav>
  );
}

export default NavBar;