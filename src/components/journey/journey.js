import React from 'react'
import Slider from "react-slick";
import journey1 from '../../images/journey/journey1.png'
import journey2 from '../../images/journey/journey2.png'
import journey3 from '../../images/journey/journey3.png'
import journey4 from '../../images/journey/journey4.png'
import journey5 from '../../images/journey/journey5.png'
import journey6 from '../../images/journey/journey6.png'
import journey7 from '../../images/journey/journey7.png'
import journey8 from '../../images/journey/journey8.png'
import journey9 from '../../images/journey/journey9.png'
import journey10 from '../../images/journey/journey10.png'

const journeys = [
    {
        id: '01',
        tImg: journey1,
    },
    {
        id: '02',
        tImg: journey2,
    },
    {
        id: '03',
        tImg: journey3,
    },
    {
        id: '04',
        tImg: journey4,
    },
    {
        id: '05',
        tImg: journey5,
    },
    {
        id: '06',
        tImg: journey6,
    },
    {
        id: '07',
        tImg: journey7,
    },
    {
        id: '08',
        tImg: journey8,
    },
    {
        id: '09',
        tImg: journey9,
    },
    {
        id: '10',
        tImg: journey10,
    },
]

const Journey = (props) => {
    const settings = {
        slidesToShow: 1,
        fade: true,
        dots: false,
        arrows: false,
        swipeToSlide: true,
        focusOnSelect: true,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <section id="journey" className="wpo-about-section-s4 section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>My Family's Journey</span>
                                </div>
                                <p>My parents came to America as refugees, fleeing the Vietnam War and the uncertainty that came with it. They dreamed of a safer, better future — not just for themselves, but for their family. They came here to Portland, Oregon, so they could raise my two sisters and me.</p>
                                <p>My dad worked long days as a truck driver, while my mom sewed as a seamstress and took janitorial jobs at night. They worked tirelessly, to provide for us and build a stable home. Eventually, they opened their own small business. But after years of hard work, unforeseen challenges forced them to lose it. That loss shook our family deeply.</p>
                                <p>I was fortunate enough to buy a property for my parents, which became a turning point for our family’s stability. Seeing firsthand how homeownership made such a difference in our lives inspired me deeply and drives my passion to help others find their own path to stability and success.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <Slider
                                    {...settings}
                                >
                                    {
                                        journeys.map((journ, tsm) => (
                                            <div className="testimonial-img" key={tsm}>
                                                <img src={journ.tImg} alt="" />
                                            </div>
                                        ))
                                    }

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey;