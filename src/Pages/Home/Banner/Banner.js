import React from 'react';
<<<<<<< HEAD
import img1 from "../../../images/mountain-477832_960_720.webp";
import img2 from "../../../images/norway-4970080_960_720.webp";
import img3 from "../../../images/plouzane-1758197_960_720.webp";
import img4 from "../../../images/sea-beach.jpg";

const Banner = () => {
    return (
        <div>
            this is Banner
            <div id="default-carousel" className="relative" data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                    {/* <!-- Item 1 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                        <img src={img1} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img2} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img3} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={img4} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                    </div>
                </div>
                {/* <!-- Slider indicators --> */}
                <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="3"></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
            </div>

        </div>
=======
import "./banner.css"

const Banner = () => {
    return (
    <section  className=' main-banner md:flex items-center content-between justify-between my-10'>
    <div className='object'>
 <img  src="./images/doctor.png" alt=""  height="10%"/>
    </div>
<div style={{display:'block'}}>
    <h1 className='heading-text '>We Provide All Health Care Solution</h1>
    <h6 className='main-banner-text'>Protect Your Health And <br /> Take Care To Of Your Health</h6><br />
   <div className="">
   <a class="btn btn-secondary btn-lg shadow" href="/#">Read More</a>
    <a class="btn btn-secondary btn-lg shadow" href="/#">Read More</a>
   </div>
</div>

    </section>
>>>>>>> dd32c11e7a52c9f7e26950cd7a7849fbcbf8a240
    );
};

export default Banner;