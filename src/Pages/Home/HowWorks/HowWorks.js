import React from 'react';
import { Chrono } from 'react-chrono';

const HowWorks = () => {
    const items = [{
        title: "Create Account",
        cardTitle: "Create Account",
        // url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..Men of the British Expeditionary Force (BEF) wade out to.",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
        // }
    },

    {
        title: "Complete your profile",
        cardTitle: "Complete your profile",
        // url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        // media: {
        //     type: "IMAGE",
        //     source: {
        //         url: "http://someurl/image.jpg"
        //     }
        // }
    },

    {
        title: "Witing for acknowledgement",
        cardTitle: "Witing for acknowledgement",
        // url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        // media: {
        //     type: "IMAGE",
        //     // source: {
        //     //     url: "http://someurl/image.jpg"
        //     // }
        // }
    },

    {
        title: "Find your donor",
        cardTitle: "Find your donor",
        url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "http://someurl/image.jpg"
            }
        }
    },

    {
        title: "Filter your Location",
        cardTitle: "Filter your Location",
        url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "http://someurl/image.jpg"
            }
        }
    },

    {
        title: "Connect your donor",
        cardTitle: "Connect your donor",
        url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "http://someurl/image.jpg"
            }
        }
    },

    {
        title: "THANK YOU",
        cardTitle: "THANK YOU",
        url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "http://someurl/image.jpg"
            }
        }
    }];
    return (
        <div>
            {/* <div style={{ width: "75%", height: "1200px" }}>
                <Chrono items={items} 
                mode="VERTICAL_ALTERNATING" 
                // hideControls={true} 
                scrollable={{scrollbar: true}}  
                slideShow slideItemDuration={4500} 
                // theme={{
                //     primary: "red",
                //     secondary: "blue",
                //     cardBgColor: "yellow",
                //     cardForeColor: "violet",
                //     titleColor: "red"
                //   }}
                
                />
            </div> */}

            <h1 className='text-center mt-10'>HOW IT WORKS</h1>

            <div style={{ width: "90%", height: "65vh" , marginTop:"50px", marginBottom:"50px", display:"block", margin:"auto"}}>
                <Chrono items={items} mode="VERTICAL_ALTERNATING"  
                slideShow={true} 
                scrollable={false}
                hideControls={false}
                slideItemDuration={4500}/>
            </div>

        </div>
    );
};

export default HowWorks;