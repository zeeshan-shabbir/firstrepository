import React from 'react'
import ZeeshanImg from '../../images/zeeshan/zee1.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay , EffectFade } from 'swiper';
// Import Swiper styles
// import "swiper/swiper.scss";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "./slider.css"
export default function AppSlider() {
    SwiperCore.use([EffectFade,Autoplay])
    
    // slider configuration
    const SliderConfigs = {
        // containerClass: 'swiper-container hero-slider',
        // parallax: true,
        // centeredSlides: true,
        // grabCursor: true,
        speed: 1000,
        spaceBetween: 0,
        // effect: 'slide',
        effect: 'fade',
        loop:true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter:true,
        },
    };

    return (

        <div>
            <Swiper {...SliderConfigs}>
            <SwiperSlide>
            <div>
                    <div className='slide slide-1'>
                        <div className="wrapper capitalize flex justify-around align-center">
                            <div className="myintro slide-content">
                                <h1 className="slide1-h1"> zeeshan shabbir</h1>
                                <p className="slide1-p">
                                    front  end <br /> web developer
                                </p>
                                <div className="center slide1-btn">
                                    <a className='btn introbtn center' href="https://www.facebook.com" target="_blank">Contact me</a>
                                </div>
                            </div>
                            <div className="my-pic-box">
                              
                                    <img className="my-img" src={ZeeshanImg} alt="Zeeshan Web developer" />
                               
                            </div>
                        </div>
                    </div>
                </div>
                
            </SwiperSlide>
            <SwiperSlide>
            <div>
                    <div className='slide slide-2'>
                    <div className="wrapper capitalize flex justify-around align-center">
                            <div className="myintro slide-content">
                                <h1 className="slide2-h1"> zeeshan shabbir</h1>
                                <p className="slide2-p">
                                    front  end <br /> web developer
                                </p>
                                <div className="center slide2-btn">
                                <a className='btn introbtn center' href="https://www.facebook.com" target="_blank">Contact me</a>
                                </div>
                            </div>
                            <div className="my-pic-box">
                                <div>
                                    <img className="my-img" src={ZeeshanImg} alt="Zeeshan Web developer" width='100%' height='100%' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        
               
            </Swiper>
        </div>
    )
}

