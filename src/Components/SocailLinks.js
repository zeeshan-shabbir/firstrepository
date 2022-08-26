import React from 'react'

import { FaFacebookF } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FiFacebook } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

export default function SocailLinks() {
    return (

        <div className="social-links flex">
            <a href="#"> <FaFacebookF /></a>
            <a href="#"> <SiGmail /></a>
            <a href="#"> <FiFacebook /></a>
            <a href="#"> <FaLinkedinIn /></a>
        </div>

    )
}
