import React from 'react';
import Stars from './Starts';

const Ratings = ({rating}) => {
   
    return (
        <div>
              <div className='review-container g-6'>
                    <div className="card">
                      
                        <div className="content">
                        <div className='flex justify-center items-center'><Stars stars={rating.stars}/>
                        </div>
                            <h3>{rating.name}</h3>
                            
                            <p>{rating.feedback}</p>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default Ratings;