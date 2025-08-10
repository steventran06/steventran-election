import React from 'react'
import sign from '../../images/signature.png'

const About = (props) => {
    return (
        <section id="about" className={`wpo-about-section section-padding ${props.abClass}`}>
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
                                    <h2>We Can Work Together For Create a Better Future.</h2>
                                </div>
                                <p>I’m Steven Tran — a realtor, former software engineer, and someone who has always believed in building connections that matter. My family immigrated to the United States seeking opportunity, and I grew up watching them work tirelessly to create a better life. Their journey taught me perseverance, gratitude, and the importance of opening doors for others, just as others once opened doors for us.</p>
                                <p>I’ve been honored to serve my community and industry in many ways: as Local and State Director for Oregon Realtors, a member of the Diversity Key Committee, and as President of the AREAA Portland chapter.</p>
                                <p>As part of the AREAA Portland family, I’m proud that we set an example as a model chapter — fully engaged at national events, from the talent show to the Policy Summit, and always celebrating our shared mission together. My background in tech taught me how to think strategically, solve problems, and innovate, and I bring that same mindset into real estate and leadership.</p>
                                <p>I’m deeply committed to listening, understanding challenges, and taking action to improve the experience for everyone I serve. Whether it’s through local association work, state-level advocacy, or building relationships nationwide, I believe we can make our community stronger — together.</p>
                                <div className="quote">
                                    <p>"Leadership starts with listening, grows through action, and thrives in community."</p>
                                </div>
                                <div className="wpo-about-left-info">
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