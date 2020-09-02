import React from "react";
import classes from './Navigation.module.css';
import NavBarListItem from "./NavBarListItem";


function NavBar() {
  return (

    <nav className={`navbar navbar-expand-lg bg-light"  ${classes.NavBar}`}>
      <a className={`navbar-brand ${classes.NavBarBrand}`} href="#">Js</a>
      <button className={`navbar-toggler`} type="button" data-toggle="collapse" data-target="#navbarToggler">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto">       
          <NavBarListItem text="Skill" link="#skill" />
          <NavBarListItem text="Experience" link="#experience" />
          <NavBarListItem text="Contact" link="#contact" />
        </ul>

      </div>

    </nav>
  );
}

export default NavBar;