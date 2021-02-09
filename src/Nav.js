import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <div className="brand-logo">C' Intro</div>
                <ul className="right">
                    <li>
                        <NavLink to="/">Home</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink> 
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav