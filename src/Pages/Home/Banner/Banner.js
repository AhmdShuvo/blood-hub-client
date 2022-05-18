import React from 'react';
import "./banner.css"

const Banner = () => {
    return (
        <section className=' main-banner md:flex items-center content-between justify-between my-10'>
            <div className='object'>
                <img src="./images/doctor.png" alt="" height="10%" />
            </div>
            <div style={{ display: 'block' }}>
                <h1 className='heading-text '>We Provide All Health Care Solution</h1>
                <h6 className='main-banner-text'>Protect Your Health And <br /> Take Care To Of Your Health</h6><br />
                <div className="">
                    <a class="btn btn-secondary btn-lg shadow" href="/#">Read More</a>
                    <a class="btn btn-secondary btn-lg shadow" href="/#">Read More</a>
                </div>
            </div>

        </section>
    );
};

export default Banner;