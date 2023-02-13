import React, { useState } from 'react';
import { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import Ratings from './Rating';
import "./Review.css"


const Review = () => {
    const [ratings,setRatings]=useState([])

    useEffect(()=>{
        fetch('http://localhost:9000/ratings').then(res=>res.json()).then(data=>setRatings(data))

    },[])


    return (
        <div className='my-32'>
            <h1 className='text-center mt-10'>
                OUR CLIENTS REVIEWS
            </h1>
            <Marquee pauseOnHover="false" speed="80">

              {
                ratings.map(rating=><Ratings rating={rating}/>)
              }
                


            </Marquee>
        </div>
    );
};
export default Review;