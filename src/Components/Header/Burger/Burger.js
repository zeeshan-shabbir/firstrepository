import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import "./Burger.css"

export default function Burger() {
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <div className="Burger" open={open} onClick={() => setOpen(!open)}>
            <div className="ToggleBTn">
                <span  className={`topLine ${open ? "topLineAnim" : ""}`}></span>
                <span  className={`midLine ${open ? "midLineAnim" : ""}`}></span>
                <span  className={`bottomLine ${open ? "bottomLineAnim" : ""}`}></span>
            </div>
        </div>
    )
}
// Burger.propTypes = {
//   open: bool.isRequired,
//   setOpen: func.isRequired,
// };