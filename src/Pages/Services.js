import React from 'react'
import { FaHtml5 } from 'react-icons/fa'

export default function Services() {
    const style = {
        fontSize: 60
      };
    return (
        <div>
            <div className="container-100 service-cont capitalize">
                <div className="serv-h1 center"><h1>SERVICES</h1></div>
                <div className="servs-wrapper">
                    <div className="row flex align-center space-between">
                        <div className="services serv-1">
                            <div className="serv-logo center">
                                <FaHtml5  style={style} />
                            </div>
                            <div className="subserv-h1 center">
                                <h2>website design</h2>
                            </div>
                            <div className="serv-para">
                               i will design Or customize your website using modern technologies.website will be fully responsive and mobile freindly.clean html code ,Beautiful  UI(user interface),css animations,javaScript events and much more as per your desire.
                            </div>
                        </div>
                        <div className="services serv-2">
                            <div className="serv-logo center">
                                <FaHtml5  style={style} />
                            </div>
                            <div className="subserv-h1 center">
                                <h2>porfolio design</h2>
                            </div>
                            <div className="serv-para">
                               i will design your Portfolio,Cv Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis id quia nihil voluptatum porro commodi, ad laudantium quaerat. Id hic soluta voluptatem perferendis voluptates in reprehenderit facilis assumenda libero obcaecati.
                            </div>
                        </div>
                        <div className="services serv-3">
                            <div className="serv-logo center">
                                <FaHtml5  style={style} />
                            </div>
                            <div className="subserv-h1 center">
                                <h2>blog website development</h2>
                            </div>
                            <div className="serv-para">
                               i will design your Portfolio,Cv Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis id quia nihil voluptatum porro commodi, ad laudantium quaerat. Id hic soluta voluptatem perferendis voluptates in reprehenderit facilis assumenda libero obcaecati.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}