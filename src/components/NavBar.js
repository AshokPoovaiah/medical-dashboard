import React from "react";
import LightDarkToggle from "./LightDarkToggle";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/profile">Profile</a></li>
                <li> <a href="/settings">Settings</a></li>
                <li className="toggle-container">
                    <LightDarkToggle />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

