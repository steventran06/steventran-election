import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import kerri from '../../images/testimonial/kerri.png'
import lindsey from '../../images/testimonial/lindsey.png'
import alex from '../../images/testimonial/alex.png'
import tony from '../../images/testimonial/tony.png'
import colleen from '../../images/testimonial/colleen.png'

const testimonial = [
    {
        id: '01',
        tImg: kerri,
        Des: "Steven has the heart and the spirit needed to lead a national organization. He is smart, dedicated, knowledgeable, and very inclusive of those around him. I am honored to support Steven as AREAA National President.",
        Title: 'Kerri Hartnett',
        Sub: "2024 National President for the Women's Council of REALTORS®",
    },
    {
        id: '02',
        tImg: tony,
        Des: "I am proud to endorse Steven Tran for AREAA National President. I have served alongside Steven on the PMAR Board of Directors and witnessed his exceptional leadership firsthand. His dedication, collaborative spirit, and steadfast support of Oregon real estate affinity groups make him the right leader to advance AREAA’s mission nationally.",
        Title: 'Dr. Tony Kelly',
        Sub: "2025 President of Oregon REALTORS®",
    },
    {
        id: '03',
        tImg: lindsey,
        Des: "Steven embodies dedication, vision, and compassion — three qualities that define not only who he is, but the kind of leader our members within AREAA deserve. His commitment to our mission and care for our community inspire trust and confidence in all who work with him.",
        Title: 'Lindsey Culver',
        Sub: "2025 President of the Portland Metropolitan Association of REALTORS®",
    },
    {
        id: '04',
        tImg: alex,
        Des: "I’m proud to support Steven Tran for AREAA National President. His vision, dedication, and commitment to empowering our AANHPI community make him the leader we need to take AREAA to the next level.",
        Title: 'Alexander Phan',
        Sub: "Principal Broker Diverse Realty Group, Founding Board Member and Past President of AREAA Portland",
    },
    {
        id: '05',
        tImg: colleen,
        Des: "Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies.",
        Title: 'Colleen Gordon',
        Sub: "Operating Principal and Principal Broker at Keller Williams Realty Professionals",
    },
]

const Testimonial = (props) => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const settings = {
        asNavFor: nav1,
        ref: (slider2) => setNav2(slider2),
        slidesToShow: 1,
        fade: true,
        dots: false,
        arrows: false,
        swipeToSlide: true,
        focusOnSelect: true,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 8000,
    };

    return (
        <section id="testimonials" className={`wpo-testimonial-section  ${props.tmClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Testimonials'} Title={'Celebrating our unity through events, conferences, and policy advocacy.'} />
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12 order-lg-1 order-2">
                            <div className="testimonial-left">
                                <div className="testimonial-left-inner">
                                    <div className="left-slide">
                                        <Slider
                                            {...settings}
                                        >
                                            {
                                                testimonial.map((tesmnl, tsm) => (
                                                    <div className="testimonial-img" key={tsm}>
                                                        <img src={tesmnl.tImg} alt="" />
                                                    </div>
                                                ))
                                            }

                                        </Slider>
                                    </div>
                                    <div className="shape-1"></div>
                                    <div className="border-s1"></div>
                                    <div className="border-s2"></div>
                                    <div className="border-s3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 order-lg-1 order-1">
                            <div className="wpo-testimonial-items">
                                <div className="right-slide">
                                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false}>
                                        {
                                            testimonial.map((tesmnl, tsm) => (
                                                <div className="wpo-testimonial-item" key={tsm}>
                                                    <div className="wpo-testimonial-text">
                                                        <i className="fi flaticon-right-quote-sign"></i>
                                                        <p>“{tesmnl.Des}”</p>
                                                        <div className="wpo-testimonial-text-btm">
                                                            <div className="wpo-testimonial-text-btm-info">
                                                                <h3>{tesmnl.Title}</h3>
                                                                <span>{tesmnl.Sub}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;