import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function AppSlider() {
    const settings = {
        dots: true,
        nav:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay:true,

        slidesToScroll: 1
    };
    return (
        <div>
            <h2 className='center'> Single Item</h2>
            <Slider {...settings}>
                <div className='slide'>
                    <h3>1</h3>
                </div>
                <div className='slide'>
                    <h3>2</h3>
                </div>
            </Slider>
        </div>
    )
}
