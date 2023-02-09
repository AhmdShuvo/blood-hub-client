import React from 'react';
import "./Footer.scss"
const Footer = () => {
    return (
        <footer>
            {/* <!--Hey! This is the original version */}
            {/* of Simple CSS Waves--> */}

            <section className="header">

                {/* <!--Content before waves--> */}
                <div className="inner-header flex justify-center items-center text-center">
                    {/* <!--Just the logo.. Don't mind this--> */}

                </div>




                {/* <!--Waves Container--> */}
                <div>
                   
                        <div className="md:flex md:justify-between p-4">
                            <div className="mb-6 md:mb-0">
                                <a href="https://flowbite.com" className="flex items-center">
                                    <img src="https://i.ibb.co/6ZXnS2b/logo-bloodhub-removebg-preview.png" className="mr-3 h-8" alt="FlowBite Logo" />
                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blood Hub</span>
                                </a>
                            </div>
                            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase dark:text-white">Resources</h2>
                                    <ul className="text-white-600 dark:text-white-400">
                                        <li className="mb-4">
                                            <a href="https://flowbite.com" className="hover:underline">Flowbite</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-white-900 uppercase dark:text-white">Follow us</h2>
                                    <ul className="text-white-600 dark:text-gray-400">
                                        <li className="mb-4">
                                            <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                        </li>
                                        <li>
                                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                    <h6 className='p-3'> copyright <i className="fa fa-copyright" aria-hidden="true"> blood Hub 2022 </i></h6>
                </div>
            </section>

        </footer>
    );
};

export default Footer;