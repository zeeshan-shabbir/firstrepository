import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ZeeshanImg from '../images/zeeshan/zee1.jpg'

export default function AppSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        // autoplay: true,
        autoplaySpeed: 7000,
        speed: 3000,
        slidesToScroll: 1
    };


    return (

        <div>
            <Slider {...settings}>
                <div className='slide slide-1'>
                    <div className="slide-content capitalize flex justify-between align-center ">

                        <div className="my-pic-box">
                            <div>
                                <img className="my-img" src={ZeeshanImg} alt="Zeeshan Web developer" width='100%' height='100%' />
                            </div>
                        </div>
                        <div className="myintro">
                            <h1> zeeshan shabbir</h1>
                            <p>
                                front  end <br /> web developer
                              </p>
                              <div className="center">

                              <button className='btn introbtn center'>Contact me</button>
                              </div>
                        </div>
                    </div>
                </div>
                <div className='slide slide-2'>
                    <h3>2</h3>
                </div>
            </Slider>
        </div>
    )
}
