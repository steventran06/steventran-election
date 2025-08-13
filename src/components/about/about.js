import React from 'react'
import sign from '../../images/signature.png'

const About = (props) => {
    return (
        <section id="about" className="wpo-about-section">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={props.abimg} alt="" />
                                <div className="wpo-about-img-text">
                                    <h4>2028</h4>

                                    <div className="about-text">
                                        <span>Leading AREAA into the Future</span>
                                    </div>

                                    <div className="border-shape-1"></div>
                                    <div className="border-shape-2"></div>
                                    <div className="border-shape-3"></div>
                                </div>
                                <div className="about-shape">
                                    <div className="shape-1"></div>
                                    <div className="shape-2"></div>
                                    <div className="shape-3"></div>
                                    <div className="shape-4"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>About Steven Tran</span>
                                    <h2>Where Creativity Meets Leadership</h2>
                                </div>
                                <p>I’m Steven Tran — an Oregon & Washington real estate broker with Keller Williams, former engineer, and community leader passionate about helping people and organizations grow. Over 15 years, I’ve worked across startups, real estate, and nonprofit leadership, building profitable businesses, leading award-winning teams, and creating innovative solutions that make a meaningful impact.</p>
                                <p>Before real estate, I worked as an engineer and later as a tech founder, building and scaling technology platforms from the ground up. That experience taught me how to think strategically, solve complex problems, and harness creativity to achieve big goals — skills I bring into every role I take on.</p>
                                <p>Whether it’s serving clients, growing a team, or leading a nonprofit, my mission is simple: create opportunities, strengthen communities, and help others succeed.</p>
                                <div className="wpo-about-left-info">
                                    <div className="wpo-about-left-inner">
                                        <div className="wpo-about-left-text">
                                            <h5>Steven Tran</h5>
                                            <span>Oregon & Washington Real Estate Broker</span>
                                        </div>
                                    </div>
                                    <div className="signature">
                                        <img src={sign} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;