// import React, { useState, useEffect } from 'react'
// import { NavLink } from "react-router-dom";

// export default function Header() {
//     const isActive = {
//         fontWeight: "bold",
//         backgroundColor: "rgba(255, 255, 255, 0.1)",
//     };
//     const [header, setHeader] = useState("header")

//     const listenScrollEvent = (event) => {
//         if (window.scrollY < 73) {
//             return setHeader("header")
//         } else if (window.scrollY > 70) {
//             return setHeader("header2")
//         }
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', listenScrollEvent);

//         return () =>
//             window.removeEventListener('scroll', listenScrollEvent);
//     }, []);
//     return (
//         <div>
//             <div className="nav_wrapper">
//                 <div className="container bg-white shadow fixed">
//                     <div className={header}>
//                         <div className='Logo'>
//                             <NavLink exact to="/" className='nav-Link'>  <p>My Logo</p></NavLink>
//                             {/* <img src={logo} className="logo" alt="logo" /> */}

//                         </div>
//                         <nav>
//                             <ul className='flexallcenter'>
//                                 <li className="nav-item">
//                                     <NavLink exact to="/" activeClassName="selected" className='nav-Link'
//                                         activeStyle={isActive}
//                                     >Home</NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink exact to="/About" className='nav-Link' activeStyle={isActive}>About</NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink exact to="/Services" className='nav-Link' activeStyle={isActive}>Services</NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink exact to="/Testimonials" className='nav-Link' activeStyle={isActive}>Testimonials</NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink exact to="/My_work" className='nav-Link' activeStyle={isActive}>My Work</NavLink>
//                                 </li>
//                                 <li className="nav-item">
//                                     <NavLink exact to="/Contact" className='nav-Link' activeStyle={isActive}>Contact</NavLink>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
