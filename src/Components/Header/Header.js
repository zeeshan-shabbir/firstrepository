import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import Burger from './Burger/Burger';
import "./Header.css"
import "./Navbars/Navbar.css"
import Navbar from "./Navbars/Navbar" 
import resNavBar from './Navbars/ResNavBar';

export default function Header() {
    const isActive = {
        fontWeight: "bold",
        color: "var(--secondary_color)",
    };
    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 400) {
            return setHeader("header")
        } else if (window.scrollY > 400) {
            return setHeader("header2")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    const size = useWindowSize();
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }
    const width = size.width
    const isMobile = width < 800
    const isPc = width > 800

    return (
        <div>
            {isMobile && <Burger />}
            <div className={header}>
                <div className='container  flex justify-between align-center '>
                    <div className='Logo'>
                        <NavLink exact to="/" className='nav-Link'>  <p className="Logo-text">My Logo</p></NavLink>
                        {/* <img src={logo} className="logo" alt="logo" /> */}

                    </div>
                    {/* <Navbar />  */}
                    {isPc && <Navbar />}
                </div>
            </div>
        </div>
    )
}
