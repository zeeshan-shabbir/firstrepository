import React, { useState,useEffect } from 'react';
import { bool, func } from 'prop-types';

import "./Burger.css"
import ResNavBar from '../Navbars/ResNavBar';

export default function Burger() {
    
    const [open, setOpen] = useState(false);
    const [backgroundColor, setbackgroundColor] = useState("white");
    
function Handlechange() {
    setOpen(!open);
}
const listenScrollEvent = (event) => {
    if (window.scrollY < 400) {
        return setbackgroundColor("white")
    } else if (window.scrollY > 400) {
        return setbackgroundColor("black")
    }
}

useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
        window.removeEventListener('scroll', listenScrollEvent);
}, []);

    return (
        <div className="Burger" id="burger" open={open} onClick={Handlechange} >
            <div className="ToggleBTn"  >
                <span  style={{backgroundColor: backgroundColor}} className={`topLine ${open ? "topLineAnim" : ""}`}></span>
                <span  className={`midLine ${open ? "midLineAnim" : ""}`}></span>
                <span  style={{backgroundColor: backgroundColor}} className={`bottomLine ${open ? "bottomLineAnim" : ""}`}></span>
            </div>
            {
                open?<ResNavBar />:null
            }

        </div>
        
    )
    
}
// Burger.propTypes = {
//   open: bool.isRequired,
//   setOpen: func.isRequired,
// };