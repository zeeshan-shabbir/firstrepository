import React from 'react'
// import "../work/work.css"
import '../work/work.css'


export default function My_work() {
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
                        <div className="hover-effect-up"></div>
                        <div className="works-contents">
                            <p>web design</p>
                            <h1>Creative Design</h1>
                        </div>
                        <div className="hover-effect-down"></div>
                    </div>
                    <div className="works work-1">
                        <div className="hover-effect-up"></div>
                        <div className="works-contents">
                            <p>web design</p>
                            <h1>Creative Design</h1>
                        </div>
                        <div className="hover-effect-down"></div>
                    </div>
                    <div className="works work-1">
                        <div className="hover-effect-up"></div>
                        <div className="works-contents">
                            <p>web design</p>
                            <h1>Creative Design</h1>
                        </div>
                        <div className="hover-effect-down"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
