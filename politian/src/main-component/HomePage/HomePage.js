import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import Features from '../../components/Features/Features';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import CampaignSection from '../../components/CampaignSection/CampaignSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import YouTubeEmbed from '../../components/youtube/YouTubeEmbed';
import FunFact from '../../components/FunFact/FunFact';
import InstagramSection from '../../components/InstagramSection/InstagramSection';
import Footer from '../../components/footer/Footer';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import abimg from '../../images/about.jpg'
import Logo from '../../images/stevenlogo.png'

const HomePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} topbarNone={'topbar-none'} Logo={Logo}/>
            <Hero/>
            <Features/>
            <About abimg={abimg}/>
            <ServiceSection/>
            <YouTubeEmbed videoId={`B3xfyTV75Gg`}/>
            <Testimonial/>
            <FunFact/>
            <InstagramSection/>
            <PartnerSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;