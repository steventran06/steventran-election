import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/stevenlogo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    const ContactLinkWithSubject = () => {
      const emailAddress = 'steven@diverserg.com';
      const subjectLine = 'Support for Steven Tran for National President 2028';
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subjectLine)}`;

      return (
        <a href={mailtoLink}>Contact</a>
      );
    };
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/index"><img src={Logo} alt="" /></Link>
                                </div>
                                <ul className="info">
                                    <li>Phone: (971) 285-2002</li>
                                    <li>Email: steven@diverserg.com</li>
                                </ul>
                                <div className="social">
                                    <ul>
                                        <li>
                                            <Link onClick={ClickHandler} to="https://www.facebook.com/stevenanquan/">
                                                <i className="fi flaticon-facebook-app-symbol"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="https://www.linkedin.com/in/steventran06/">
                                                <i className="fi flaticon-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="https://www.instagram.com/stevenanquan">
                                                <i className="fi flaticon-instagram-1"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><AnchorLink href='#home'>Home</AnchorLink></li>
                                    <li><AnchorLink href='#about'>About</AnchorLink></li>
                                    <li><AnchorLink href='#vision'>Vision</AnchorLink></li>
                                    <li><AnchorLink href='#photos'>Photos</AnchorLink></li>
                                    <li><AnchorLink href='#testimonials'>Testimonials</AnchorLink></li>
                                    <li><ContactLinkWithSubject /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-md-12 col-12">
                            <ul>
                                <li>&copy; 2025 <Link onClick={ClickHandler} to="/">Steven Tran for AREAA National President</Link>. All rights reserved.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;