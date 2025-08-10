import React from "react";
import hero1 from '../../images/slider/1.png'

const Hero = () => {
    return (
        <section id="home" className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="hero-content">
                            <div data-swiper-parallax="300" className="slide-title-sub">
                                <span>Driven to Serve, Ready to Lead</span>
                            </div>
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>Steven Tran</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>I'm running for National President of the Asian Real Estate Association of America for 2028.</p>
                                <p>Turning member concerns into real solutions.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="politian-pic">
                                <img src={hero1} alt="" />
                                <div className="politian-shape">
                                    <div className="shape-1"></div>
                                    <div className="shape-2"></div>
                                    <div className="shape-3"></div>
                                    <div className="shape-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;