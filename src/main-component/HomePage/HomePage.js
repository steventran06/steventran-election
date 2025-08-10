import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import Features from '../../components/Features/Features';
import About from '../../components/about/about';
import Journey from '../../components/journey/journey';
import Career from '../../components/career/career';
import Testimonial from '../../components/Testimonial/Testimonial';
import YouTubeEmbed from '../../components/youtube/YouTubeEmbed';
import InstagramSection from '../../components/InstagramSection/InstagramSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import abimg from '../../images/about.png'
import Logo from '../../images/stevenlogo.png'
import hero1 from '../../images/slider/1.png'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} topbarNone={'topbar-none'} Logo={Logo}/>
            <Hero/>
            <Features/>
            <YouTubeEmbed videoId={`B3xfyTV75Gg`}/>
            <About abimg={abimg}/>
            <Journey abimg={abimg}/>
            <Career />
            <InstagramSection/>
            <Testimonial/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;