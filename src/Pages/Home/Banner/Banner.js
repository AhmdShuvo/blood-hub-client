import React from 'react';
import "./banner.css"

const Banner = () => {
    return (
        <section className=' main-banner md:flex items-center content-between justify-between mb-30'>
            <div className='object'>
                <img src="./images/hero/banner.png" alt="" width="100%" />
            </div>
            <div style={{ display: 'block',width:'50%' }}>
                <h1 className='heading-text '> </h1>
                <h6 className='main-banner-text'>Be the reason for someone's heartbeat.</h6><br />
                <div className="">
                    <a className="btn btn-secondary btn-lg shadow" href="/signup">Get Started As A Donor</a>
                    <a className="btn btn-secondary btn-lg shadow" href="/service">Find A Donor</a>
                </div>
            </div>

        </section>
    );
};

export default Banner;