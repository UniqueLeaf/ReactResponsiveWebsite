import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import TrainingContent from '../components/Training';

const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Training' text='Pre-Flight & In-Fight Training.'/>
            <TrainingContent />
            <Footer />
        </div>
    )
}

export default Training;