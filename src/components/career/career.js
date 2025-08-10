import React from 'react'
import Slider from "react-slick";
import career1 from '../../images/career/career1.png'
import career2 from '../../images/career/career2.png'
import career3 from '../../images/career/career3.png'
import career4 from '../../images/career/career4.png'
import career5 from '../../images/career/career5.png'
import career6 from '../../images/career/career6.png'
import career7 from '../../images/career/career7.png'
import career8 from '../../images/career/career8.png'
import career9 from '../../images/career/career9.png'
import career10 from '../../images/career/career10.png'

const careers = [
    {
        id: '01',
        tImg: career1,
    },
    {
        id: '02',
        tImg: career2,
    },
    {
        id: '03',
        tImg: career3,
    },
    {
        id: '04',
        tImg: career4,
    },
    {
        id: '05',
        tImg: career5,
    },
    {
        id: '06',
        tImg: career6,
    },
    {
        id: '07',
        tImg: career7,
    },
    {
        id: '08',
        tImg: career8,
    },
    {
        id: '09',
        tImg: career9,
    },
    {
        id: '10',
        tImg: career10,
    },
]

const Career = (props) => {
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
        <section id="career" className={`wpo-about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <Slider
                                    {...settings}
                                >
                                    {
                                        careers.map((car, tsm) => (
                                            <div className="testimonial-img" key={tsm}>
                                                <img src={car.tImg} alt="" />
                                            </div>
                                        ))
                                    }

                                </Slider>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>My Real Estate Career</span>
                                    <h2>Together, We Win</h2>
                                </div>
                                <p>Real estate isn’t just my profession — it’s how I help people turn dreams into reality. I’ve seen the joy of first-time buyers getting their keys and the relief of families securing the right offer in a competitive market. I guide clients from our first conversation through inspections, negotiations, and closing — making sure they feel informed, supported, and confident every step of the way.</p>
                                <p>Over the past four years, I’ve helped homeowners build generational wealth, investors grow portfolios, and families find a place to call home. My clients know I fight for their best interests with tenacity, creativity, and care.</p>
                                <p>As Local and State Director for Oregon Realtors, a member of the Diversity Key Committee, and Chapter President of AREAA Portland, I’ve led peers through unprecedented industry challenges — from lawsuits to attacks on the National Association of Realtors — fostering unity, transparency, and a shared commitment to serving the public.</p>
                                <p>In every transaction, I carry forward the values my parents taught me: work hard, act with integrity, and always put people first.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Career;