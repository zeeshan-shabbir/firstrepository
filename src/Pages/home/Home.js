import React from 'react'
import AppSlider from '../../Components/slider/Slider'
import  {About}  from '../about/About '
import Services from '../services/Services'
import My_work from '../work/My_work'
import Contact from '../contact/Contact'
import Img from '../../images/bg fixed/bg-fixed.jpg'
import BgFixed from '../../Components/BgFixed'


export const Home = () => {
    return (
        <div className="home">
         
            <AppSlider />
            <About />
            <BgFixed />
            <Services />
            <My_work />
            <Contact />
        </div>
    )
}
