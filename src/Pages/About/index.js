import React from 'react';
import '../../Styles/About.scss'
import coocking from  './../../image/Frame 15.png'
import ablogo from './../../image/about-logo.svg'
import peop from './../../image/Frame 16.png'
const About = () => {
    return (
        <div id='about'>
            <div className="container">
                <div className="about">
                    <div className="about--block">
                        <div>
                            <img className="about--block__img1" src={ablogo} alt="img"/>
                            <h2>A Journey Throught Cafesio Flavors</h2>
                        </div>
                        <p>Try dishes that will open
                            up new tastes for you and
                            delight your eyes with their
                            appearance. Here you will find
                            a cozy atmosphere, excellent
                            service and attention to each
                            guest. Book a table now and
                            enjoy a unique experience of
                            taste discovery!
                        </p>
                    </div>
                    <div className="about--block2">
                        <img className="about--block__img2" src={coocking} alt="img"/>
                        <img src={peop} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;