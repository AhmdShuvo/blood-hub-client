import React from 'react';
import Marquee from "react-fast-marquee";
import "./Review.css"


const Review = () => {

    return (
        <div className='my-32'>
            <h1 className='text-center mt-10'>
                OUR CLIENTS REVIEWS
            </h1>
            <Marquee pauseOnHover="false" speed="80">

                <div className='review-container g-6'>
                    <div className="card">
                        <div className="image">
                            <img href="#" src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt='' />
                        </div>
                        <div className="content">
                            <h3>This is content</h3>
                            <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>
                <div className="review-container">
                    <div className="card">
                        <div className="image">
                            <img href="#" src="https://cdn.pixabay.com/photo/2022/03/24/14/42/animal-7089224_960_720.jpg" alt='' />
                        </div>
                        <div className="content">
                            <h3>This is content</h3>
                            <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>
                <div className="review-container">
                    <div className="card">
                        <div className="image">
                            <img href="#" src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg" alt='' />
                        </div>
                        <div className="content">
                            <h3>This is content</h3>
                            <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>
                <div className="review-container">
                    <div className="card">
                        <div className="image">
                            <img href="#" src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt='' />
                        </div>
                        <div className="content">
                            <h3>This is content</h3>
                            <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>
                <div className="review-container">
                    <div className="card">
                        <div className="image">
                            <img href="#" src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg" alt='' />
                        </div>
                        <div className="content">
                            <h3>This is content</h3>
                            <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>


            </Marquee>
        </div>
    );
};
export default Review;