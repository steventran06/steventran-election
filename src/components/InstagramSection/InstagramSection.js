import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";


import ins1 from '../../images/instragram/feed1.png'
import ins2 from '../../images/instragram/feed2.png'
import ins3 from '../../images/instragram/feed3.png'
import ins4 from '../../images/instragram/feed4.png'
import ins5 from '../../images/instragram/feed5.png'
import ins6 from '../../images/instragram/feed6.png'
import ins7 from '../../images/instragram/feed7.png'
import ins8 from '../../images/instragram/feed8.png'
import ins9 from '../../images/instragram/feed9.png'
import ins10 from '../../images/instragram/feed10.png'
import ins11 from '../../images/instragram/feed10.png'

const InstagramArray = [
    {
        InsImg: ins1,
    },
    {
        InsImg: ins4,
    },
    {
        InsImg: ins7,
    },
    {
        InsImg: ins10,
    },
    {
        InsImg: ins2,
    },
    {
        InsImg: ins5,
    },
    {
        InsImg: ins8,
    },
    {
        InsImg: ins11,
    },
    {
        InsImg: ins3,
    },
    {
        InsImg: ins6,
    },
    {
        InsImg: ins9,
    }
]

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: '220px',
    autoplay: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: '0',
                infinite: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const InstagramSection = () => {
    return (
        <section id="photos" className="wpo-instagram-section">
            <div className="container-fluid">
                <SectionTitle subTitle={'Snapshots in Time'} Title={'Celebrating our unity through events, conferences, and policy advocacy.'} />
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-instagram-container instagram-slider">
                            <Slider {...settings}>
                                {InstagramArray.map((instagram, ins) => (
                                    <div className="grid" key={ins}>
                                        <div className="wpo-instagram-item">
                                            <img src={instagram.InsImg} alt="" className="img img-responsive"/>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InstagramSection;