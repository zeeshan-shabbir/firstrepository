import React, { useState,useEffect } from 'react';
import { bool, func } from 'prop-types';

import "./Burger.css"
import ResNavBar from '../Navbars/ResNavBar';

export default function Burger() {
    
    const [open, setOpen] = useState(false);
    const [backgroundColor, setbackgroundColor] = useState("red");
    const style={
        backgroundColor:backgroundColor,
    }
    
function Handlechange() {
    // useEffect(() => {
    //     setTimeout(() => {
    //         setOpen(!open);
    //     },3000);
    //   },[]);
    setOpen(!open);
    setbackgroundColor("green");
}

    
    console.log(open);
    return (
        <div className="Burger" id="burger" open={open} onClick={Handlechange} >
            <div className="ToggleBTn">
                <span  className={`topLine ${open ? "topLineAnim" : ""}`}></span>
                <span  className={`midLine ${open ? "midLineAnim" : ""}`}></span>
                <span  className={`bottomLine ${open ? "bottomLineAnim" : ""}`}></span>
            </div>
            {open && <ResNavBar />}

        </div>
        
    )
    
}
// Burger.propTypes = {
//   open: bool.isRequired,
//   setOpen: func.isRequired,
// };