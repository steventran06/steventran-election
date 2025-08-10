import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const ContactLinkWithSubject = () => {
      const emailAddress = 'steven@diverserg.com';
      const subjectLine = 'Support for Steven Tran for National President 2028';
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subjectLine)}`;

      return (
        <a href={mailtoLink}>Contact</a>
      );
    };

    return (
        <header id="header">
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" to="/"><img src={props.Logo}
                                        alt="logo"/></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><AnchorLink href='#home'>Home</AnchorLink></li>
                                        <li><AnchorLink href='#about'>About</AnchorLink></li>
                                        <li><AnchorLink href='#vision'>Vision</AnchorLink></li>
                                        <li><AnchorLink href='#photos'>Photos</AnchorLink></li>
                                        <li><AnchorLink href='#testimonials'>Testimonials</AnchorLink></li>
                                        <li><ContactLinkWithSubject /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;