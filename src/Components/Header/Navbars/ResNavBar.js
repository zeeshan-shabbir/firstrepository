import React from 'react'
import { NavLink } from "react-router-dom";
import SocailLinks from '../../SocailLinks';
export default function resNavBar() {
    const isActive = {
        fontWeight: "bold",
        color: "var(--secondary_color)",
    };
    return (
        <nav>
            <ul className='resNavBar'>
                <li className="nav-item">
                    <NavLink exact to="/" className='nav-Link' activeStyle={isActive}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/About" className='nav-Link' activeStyle={isActive}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/Services" className='nav-Link' activeStyle={isActive}>Services</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink exact to="/Testimonials" className='nav-Link' activeStyle={isActive}>Testimonials</NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink exact to="/My_work" className='nav-Link' activeStyle={isActive}>My Work</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/Contact" className='nav-Link' activeStyle={isActive}>Contact</NavLink>
                </li>
                <li className='flexallcenter my-10'>
                    <SocailLinks />
                </li>
            </ul>
        </nav>
    )
}
