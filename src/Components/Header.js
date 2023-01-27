import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="header-list">
                <ul className="">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/accomplishments">Accomplishments</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;