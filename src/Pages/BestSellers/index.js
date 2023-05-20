import React from 'react';
import './../../Styles/BestSellers.scss'
import ablogo from './../../image/about-logo.svg'
import ablogos1 from './../../image/Frame 19.png'
import ablogos2 from './../../image/Frame 20.png'
import Slider from "react-slick";

const bestSellers = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     autoplay: false,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    // };
    const settings = {
        dots: true,
        infinite: false,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="reserve">
            <div className="container">
                <div className="reserve">
                    <div className="reserve--block" >
                        <img className="reserve--block__img" src={ablogo} alt="img"/>
                        <h2>You Only Reserve
                            Exception
                        </h2>
                        <p>Each location has a menu that`s curated just for them.
                            See what new at your Cafesio and You`ll find Cafesio
                            Covent Carden moments.
                        </p>
                    </div>
                    <div className="reserve--swiper" >
                        <Slider{...settings}>
                            <div className="reserve--swiper__item" >
                                <img src={ablogos1} alt="img"/>
                            </div>
                            <div className="reserve--swiper__item">
                                <img src={ablogos2} alt="img"/>
                            </div>
                            <div className="reserve--swiper__item">
                                <img src={ablogos2} alt="img"/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default bestSellers;
