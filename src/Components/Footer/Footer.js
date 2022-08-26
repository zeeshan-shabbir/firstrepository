import React from 'react'
import './footer.css'


import { FaFacebookF } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FiFacebook } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import SocailLinks from '../SocailLinks';
export default function Footer() {
    return (
        <footer className="footer">
        <div className="FooterContainer">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
       
                <div className="footer-col">
                    <h4>follow me</h4>
                    {/* <div className="social-links flex">
                        <a href="#"> <FaFacebookF /></a>
                        <a href="#"> <SiGmail /></a>
                        <a href="#"> <FiFacebook /></a>
                        <a href="#"> <FaLinkedinIn /></a>
                    </div> */}
                    <SocailLinks />
                </div>
            </div>
        </div>
   </footer>
    )
}
