import React from 'react'
// import "../work/work.css"
import '../work/work.css'
import image from "../../images/works/work-01.webp"
import WorkData from "./WorkData"
import WorkCard from './WorkCard';




export default function My_work() {
    console.log(WorkData);
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
                {WorkData.slice(0,3).map((item) => (
                        
                        <WorkCard key={item.id}  data={item}></WorkCard>

                  
                ))}
                    {/* <div className="works">
                        <div className="">
                          
                                <img src={image} alt="" className="work-img"/>

                        </div>
                     
                        <div className="work-intro center">
                           
                            <h2 className="proName">
                                Project Name 
                            </h2>
                            <p className="proIntro">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsa?
                            </p>
                            <div>
                                <a to = "www.facebook.com" className="projLink">
                              See Project 
                                </a>
                            </div>
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
                  
                        */}
                </div>

            </div>
           <div className="hrline"></div>
        </div>
    )
}
