import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Pricelist from '../components/Pricing';

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='PRICING' text='Choose your trip.'/>
            <Pricelist />
            <Footer />
        </div>
    )
}

export default Pricing;