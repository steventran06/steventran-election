import React from "react";
import { Link } from 'react-router-dom'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Features = (props) => {
    return (
        <section className="wpo-features-area">
            <div className="container">
                <div className="features-wrap">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="feature-item-wrap">
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fi flaticon-telephone"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/about">Listening First</Link></h2>
                                    </div>
                                </div>
                                <div className="feature-item-hidden">
                                    <div className="icon">
                                        <i className="fi flaticon-telephone"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/about">Listening First</Link></h2>
                                        <p>I will reach out to members across the country, hear your concerns, and act on your feedback to make AREAA better for everyone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="feature-item-wrap">
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fi flaticon-team-work"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/campaign">Platform & Tech</Link></h2>
                                    </div>
                                </div>
                                <div className="feature-item-hidden">
                                    <div className="icon">
                                        <i className="fi flaticon-team-work"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/campaign">Platform & Tech</Link></h2>
                                        <p>I will apply my engineering mindset to enhance our digital platforms, ensuring functionality and consistency across all chapters to better serve our members.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="feature-item-wrap">
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fi flaticon-community"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/donate">Stronger Advocacy</Link></h2>
                                    </div>
                                </div>
                                <div className="feature-item-hidden">
                                    <div className="icon">
                                        <i className="fi flaticon-community"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/donate">Stronger Advocacy</Link></h2>
                                        <p>Continue strengthening our policy and advocacy work to ensure AREAA remains a powerful voice for our community.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="feature-item-wrap">
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fi flaticon-location"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/volunteer">Events & Education</Link></h2>
                                    </div>
                                </div>
                                <div className="feature-item-hidden">
                                    <div className="icon">
                                        <i className="fi flaticon-location"></i>
                                    </div>
                                    <div className="feature-text">
                                        <h2><Link onClick={ClickHandler} to="/volunteer">Events & Education</Link></h2>
                                        <p>I will ensure we host incredible events, deliver top-notch education, and fundraise for great causes that benefit our entire community.</p>
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

export default Features;