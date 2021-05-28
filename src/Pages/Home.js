import React from 'react'
import AppSlider from '../Components/Slider'
import  {About}  from './About '
import Services from './Services'


export const Home = () => {
    return (
        <div>
            <AppSlider />
            <About />
            <Services />
        </div>
    )
}
