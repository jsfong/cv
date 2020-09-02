import React from "react";
import classes from './NavBarListItem.module.css';

function NavBarListItem(props) {
    return (
        <li className={`nav-item ${classes.NavItem}`}>
            <a className={`nav-link ${classes.NavLink}`} href={props.link}>{props.text}</a>
        </li>
    );
}

export default NavBarListItem;