import React from 'react';
import "../services/service.css"
import { FaHtml5 } from 'react-icons/fa';
// import Fade from 'react-reveal/Fade';
import serData from "./serData"
import SerCard from './SerCard';

export default function Services() {
    const style = {
        fontSize: 60
      };
    return (
        <div>
            <div className="container-100 service-cont capitalize">
                <div className=" center"><h1 className="serv-h1">SERVICES</h1></div>
                <div className="servs-wrapper">
                    <div className="sevs-row flex align-center justify-between flexwrap">
                    {serData.map((item) => (
                        
                            <SerCard key={item.id}  data={item}></SerCard>

                      
                    ))}
                    </div>
                </div>
            </div>
            {/* <div className="hrline"></div> */}
        </div>
    )
}
