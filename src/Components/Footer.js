import React from 'react'
import {FiFacebook} from 'react-icons/fi';
import {FaFacebookF} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {FaLinkedinIn} from 'react-icons/fa';


export default function Footer() {
    return (
        <div className='bg-dark my-top footer capitalize'>
          <div className="footerRow flex justify-between align-center">
          <div className="footer-cols col-1">
                  <div className="message">
                      <h1>Message</h1>
                      <p>The mission of the department is to serve the country and wider international community in the development and communication of Mathematics through high quality research, publication and training at both undergraduate and postgraduate levels..</p>
                  </div>
              </div>
              <div className="footer-cols col-2">
                  <ul className="social-list flex">
                      <li className="socail-item">
                          <a href="" className="social-link">
                           <FaFacebookF />
                          </a>
                      </li>
                      <li className="socail-item">
                          <a href="" className="social-link">
                           <SiGmail />
                          </a>
                      </li>
                      <li className="socail-item">
                          <a href="" className="social-link">
                           <FaLinkedinIn />
                          </a>
                      </li>
                      <li className="socail-item">
                          <a href="" className="social-link">
                           <FiFacebook />
                          </a>
                      </li>
                  </ul>
              </div>
             
          </div>
          <div className="copyright center">
          <p>© 2019 <strong><a href="https://www.facebook.com/Zeeehope" target="_blank" rel="noreferrer">Zeeshan Shabbir</a></strong> All rights reserved.</p>

          </div>
        </div>
    )
}
