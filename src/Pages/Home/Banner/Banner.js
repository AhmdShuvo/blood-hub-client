import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import "./banner.css"

const Banner = () => {
    const {user}=useAuth()

    return (
        <section className=' main-banner md:flex items-center content-between justify-between mb-30'>
            <div style={{width:'60%'}} className='object'>
                <img src="./images/hero/banner.png" alt="" width="100%" />
            </div>
            <div style={{ display: 'block' }}>
                <h1 className='heading-text '> </h1>
                <h6 className='main-banner-text'>Be the reason for someone's heartbeat.</h6><br />
                <div className="flex justify-evenly items-center">
                    {
                        !user.email?<a type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="/signup">Become A Donor</a>:<a type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href={`/profile/${user.displayName}`}>Your Profile</a>
                    
                    }
                    
                    <a type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" href="/donors">Find A Donor</a>
                </div>
            </div>

        </section>
    );
};

export default Banner;