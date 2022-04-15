import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import HowWorks from '../HowWorks/HowWorks'

const Home = () => {
    return (
        <div>
            this is parent home
            <Banner></Banner>
            <HowWorks></HowWorks>
            <Review></Review>
        </div>
    );
};

export default Home;