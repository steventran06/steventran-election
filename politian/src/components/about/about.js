import React from 'react'
import sign from '../../images/signeture.png'

const About = (props) => {
    return (
        <section className={`wpo-about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={props.abimg} alt="" />
                                <div className="wpo-about-img-text">
                                    <h4>1998</h4>

                                    <div className="rotate-text">
                                        <span>W</span>
                                        <span>e</span>
                                        <span>A</span>
                                        <span>r</span>
                                        <span>e</span>
                                        <span>W</span>
                                        <span>o</span>
                                        <span>r</span>
                                        <span>k</span>
                                        <span>i</span>
                                        <span>n</span>
                                        <span>g</span>
                                        <span>F</span>
                                        <span>o</span>
                                        <span>r</span>
                                        <span>Y</span>
                                        <span>o</span>
                                        <span>u</span>
                                        <span>S</span>
                                        <span>i</span>
                                        <span>n</span>
                                        <span>c</span>
                                        <span>e</span>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
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
                                    <h2>We Can Work Together For Create a Better Future.</h2>
                                </div>
                                <p>I’m Steven Tran — a realtor, former software engineer, and someone who has always believed in building connections that matter. I’ve been honored to serve my community and industry in many ways: as Local and State Director for Oregon Realtors, a member of the Diversity Key Committee, and as President of the AREAA Portland chapter.</p>
                                <p>As part of the AREAA Portland family, I’m proud that we set an example as a model chapter — fully engaged at national events, from the talent show to the Policy Summit, and always celebrating our shared mission together. My background in tech taught me how to think strategically, solve problems, and innovate, and I bring that same mindset into real estate and leadership.</p>
                                <p>I’m deeply committed to listening, understanding challenges, and taking action to improve the experience for everyone I serve. Whether it’s through local association work, state-level advocacy, or building relationships nationwide, I believe we can make our community stronger — together.</p>
                                <div className="quote">
                                    <p>"Leadership starts with listening, grows through action, and thrives in community."</p>
                                </div>
                                <div className="wpo-about-left-info">
                                    <div className="signeture">
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