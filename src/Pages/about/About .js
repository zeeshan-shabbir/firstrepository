import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Fade   from 'react-reveal/Fade';
import "../about/about.css"


export  const About = () => {
    return (
        <>
          
            <div className=' about'>
                <div className=" center">
                    <h1 className="about_h1">About Me</h1>
                </div>
                <div className="container-100">
                    <div className="aboutRow flex ">
                        <Fade left  duration={2500}> 
                            <div className="about_cols col-1">
                                <div className="about_paras">
                                    <p className="about-para">
                                        An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.
                        </p>
                                    <p className="about-para">
                                        Received overcame oh sensible so at an. Formed do change merely to county it. Am separate contempt domestic to to oh. On relation my so addition branched. Put hearing cottage she norland letters equally prepare too. Replied exposed savings he no viewing as up. Soon body add him hill. No father living really people estate if. Mistake do produce beloved demesne if am pursuit.
                        </p>
                                    <p className="about-para">
                                        An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.
                        </p>
                                </div>
                            </div>
                        </Fade>
                        <Fade  right duration={2500}>
                        <div className="about_cols col-2">
                            <div className="skills_indicator capitalize">
                                <div className="skill_1">
                                    <div className="skill-h1"><h1>Html</h1> </div>
                                    <div className=" progress">
                                        <div className="skills_power html_power"></div>
                                    </div>
                                </div>
                                <div className="skill_2">
                                    <div className="skill-h1"><h1>css</h1> </div>
                                    <div className=" progress">
                                        <div className="skills_power css_power"></div>
                                    </div>
                                </div>
                                <div className="skill_3">
                                    <div className="skill-h1"><h1>bootstrap</h1> </div>
                                    <div className=" progress">
                                        <div className="skills_power bootstrap_power"></div>
                                    </div>
                                </div>
                                <div className="skill_4">
                                    <div className="skill-h1"><h1>javascript</h1> </div>
                                    <div className=" progress">
                                        <div className="skills_power js_power"></div>
                                    </div>
                                </div>
                                <div className="skill_5">
                                    <div className="skill-h1"><h1>jquery</h1> </div>
                                    <div className=" progress">
                                        <div className="skills_power jquery_power"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Fade  >
                    </div>
                    <div className="aboutBtn">
                            <button className="btn cvbtn">
                                Download CV
                            </button>
                        </div>
                </div>
            </div>
            <div className="hrline"></div>
        </>
    )
}
