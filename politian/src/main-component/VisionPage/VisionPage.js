import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import Features from '../../components/Features/Features';
import About from '../../components/about/about';
import Testimonial from '../../components/Testimonial/Testimonial';
import YouTubeEmbed from '../../components/youtube/YouTubeEmbed';
import InstagramSection from '../../components/InstagramSection/InstagramSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import abimg from '../../images/about.png'
import Logo from '../../images/stevenlogo.png'

const VisionPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} topbarNone={'topbar-none'} Logo={Logo}/>
            <Hero/>
            <Features/>
            <About abimg={abimg}/>
            <YouTubeEmbed videoId={`B3xfyTV75Gg`}/>
            <InstagramSection/>
            <Testimonial/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default VisionPage;