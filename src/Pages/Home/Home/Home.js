import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import HowWorks from '../HowWorks/HowWorks';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <HowWorks></HowWorks>
            <Review></Review>
        </div>

    )
}

export default Home;