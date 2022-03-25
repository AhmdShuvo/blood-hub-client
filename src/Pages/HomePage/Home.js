
import React from 'react';
import Card from '../Header/Card';
import Banner from './Banner/Banner';
import Search from './FindOne/Search';


const Home = () => {
    return (
        <div  className=''>
            <Banner></Banner>
            <Search></Search>
            <Card></Card>
       </div>
    );
};

export default Home;