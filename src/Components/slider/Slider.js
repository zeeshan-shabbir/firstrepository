import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ZeeshanImg from '../../images/zeeshan/zee1.jpg'
import "./slider.css"



export default function AppSlider() {
    const beforechange = () => {
        var slickActive = document.getElementsByClassName("slick-active")
        var slideContent = document.getElementsByClassName("slide-content")
        // console.log(h1);
        slickActive.className = "animation"
        slideContent.className = "animation"
    }
    const settings = {
        dots: false,
        // arrows: false,
        infinite: true,
        pauseOnHover:true,
        slidesToShow: 1,
        // autoplay: true,
        autoplaySpeed: 7000,
        speed: 2000,
        fade: true,
        // cssEase: 'linear',
        beforechange,
        slidesToScroll: 1
    };


    return (

        <div>
            <Slider {...settings}>
                <div className='slide slide-1'>
                    <div className="sslide-content capitalize flex justify-between align-center ">
                        <div className="myintro slide-content">
                            <h1 className="slide1-h1"> zeeshan shabbir</h1>
                            <p className="slide1-p">
                                front  end <br /> web developer
                              </p>
                            <div className="center slide1-btn">
                                <button className='btn introbtn center'>Contact me</button>
                            </div>
                        </div>
                        <div className="my-pic-box">
                            <div>
                                <img className="my-img" src={ZeeshanImg} alt="Zeeshan Web developer" width='100%' height='100%' />
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
