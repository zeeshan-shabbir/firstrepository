import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <div className="nav_wrapper">
                <div className="container-100 bg-white shadow fixed">
                    <div className='container  flex justify-between align-center '>
                        <div className='Logo'>
                            <NavLink exact to="/" className='nav-Link'>  <p>My Logo</p></NavLink>
                            {/* <img src={logo} className="logo" alt="logo" /> */}

                        </div>
                        <nav>
                            <ul className='flexallcenter'>
                                <li className="nav-item">
                                    <NavLink exact to="/" className='nav-Link'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/About" className='nav-Link'>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/Services" className='nav-Link'>Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/" className='nav-Link'>Testimonials</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/My_work" className='nav-Link'>My Work</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/" className='nav-Link'>Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
