import React from 'react'
import AppSlider from '../../Components/slider/Slider'
import  {About}  from '../about/About '
import Services from '../services/Services'
import My_work from '../work/My_work'
import Contact from '../contact/Contact'
import Picker from '../../Components/Theme/Picker'



export const Home = () => {
    return (
        <div className="home">
         
            <AppSlider />
            <About />         
            <Services />
            <My_work />
            <Contact />
            <Picker />
        </div>
    )
}
