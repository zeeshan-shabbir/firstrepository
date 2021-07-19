import React from 'react'
// import "../work/work.css"
import '../work/work.css'
import image from "../../images/works/work-01.webp"
import { Link } from 'react-router-dom'
import { FaHtml5 } from 'react-icons/fa';


export default function My_work() {
    const style = {
        fontSize: 60
      };
    return (
        <div className="container-100 work-cont">
            <div className="container capitalize">
                <div className="work-heading center">
                    <h1 className="work-h1">
                        my work
                    </h1>
                </div>
                <div className="rows flex align-center justify-between">
                    <div className="works work-1">
                        <div className="">
                            {/* <i> */}
                                <img src={image} alt="" className="work-img"/>
                            {/* </i> */}
                        </div>
                        <div className="works-contents">
                            <p>web design</p>
                            <h1>Creative Design</h1>
                        </div>
                        <div className="work-link ">
                            <i>
                                <Link >
                                <FaHtml5 style={style}></FaHtml5>
                                </Link>
                            </i>
                        </div>
                    </div>
                    <div className="works work-1">
                        <div className="work-img">
                            <i>
                                <img src={image} alt="" className="work-img"/>
                            </i>
                        </div>
                        <div className="works-contents">
                            <p>web design</p>
                            <h1>Creative Design</h1>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="works work-1">
                        <div className="work-img">
                            <i>
                                <img src={image} alt="" className="work-img"/>
                            </i>
                        </div>
                        <div className="works-contents">
                            <p>web design</p>
                            <h1>Creative Design</h1>
                        </div>
                        <div className=""></div>
                    </div>
                  
                       
                </div>

            </div>
        </div>
    )
}
