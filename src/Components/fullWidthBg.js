import React from 'react'
import img from "../images/zeeshan/Zeeshan pic (1).png"

export default function FullWidthBg(porps) {
    var ReactRotatingText = require('react-rotating-text');


    const { routeName } = porps
    return (
        <div>
            <div className="full-Bg">
                {/* <img src={img} alt="" /> */}


                <div className="fullBgwrapper capitalize flex justify-around align-center">
                    <div className="myintro slide-content">
                        <h1 className="slide1-h1"> zeeshan shabbir</h1>
                        <p className="slide1-p">
                          
                            <ReactRotatingText items={[' web developer', 'Programmer', 'mathematician ']} pause={3000} typingInterval={70} deletingInterval ={70} />
                        </p>
                        {/* <div className="center slide1-btn">
                            <a className='btn introbtn center' href="https://www.facebook.com" target="_blank" rel="noreferrer">Contact me</a>
                        </div> */}
                    </div>
                    <div className="zeeshan">
                        <img className="my-img2" src={img} alt="" />
                    </div>
                    <div className="breadcrump flex align-center justify-between">
                    <ul className="breadcrump-list flex capitalize">
                        <li className="breadCrump-item">
                        home &nbsp;
                        </li>
                        <li className="breadCrump-item">
                        { routeName } &nbsp;
                        </li>
                    </ul>
                </div>

                </div>
              
            </div>
        </div>
    )
}
