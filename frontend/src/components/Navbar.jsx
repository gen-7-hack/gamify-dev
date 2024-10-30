import React from 'react';
import homeIcon from '../assets/icons/home.png';
import profileIcon from '../assets/icons/profile.png';
import questsIcon from '../assets/icons/quests.png';
import rankingIcon from '../assets/icons/leaderboard.png';
import {Link} from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
    return (
        <div className="app-footer">
            <NavbarButton iconName={homeIcon} buttonName={"Home"} url={"/"} />
            <NavbarButton iconName={questsIcon} buttonName={"Quests"} url={"/quests"} />
            <NavbarButton iconName={rankingIcon} buttonName={"Leaderboard"} url={"/leaderboard"} />
            <NavbarButton iconName={profileIcon} buttonName={"Profile"} url={"/profile"} />
        </div>
    );
}

const NavbarButton = ({ iconName, buttonName, url }) => {
    return (
        <Link to={url}>
            <button id="{buttonName}" className="footer-button">
                <img src={iconName} className="button-icon" />
                    {buttonName}
            </button>
        </Link>
    );
}

export default Navbar;