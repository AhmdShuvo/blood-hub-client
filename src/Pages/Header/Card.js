import React from 'react';
import "./Card.scss"

const Card = () => {
    return (
        <div  className="container">
        <div  className="row">
          <div className="col-md-12 ">
            <center>
              <h1>Our services</h1>    
            </center>
          </div>
        </div>
        <div style={{marginLeft: "4px"}} className="row md:grid grid-cols-3 gap-4">
          <div  className=" m-18 col-md-3">
            <div  style={{backgroundColor:"white"}} className="box shadow-gray-900 shadow-2xl">
              <div className="content">
                <img src="https://www.e-bureauet.dk/media/1062/competency-cms.svg" alt="" />
                <br />
                <p>Platform</p>
              </div>
              <div className="content-hover">
                <h1>Platform</h1>
                <p>We are specialised in different CMS platforms so we can offer the best advice for our clients</p>
              </div>
            </div>
          </div>
          <div  className=" col-md-3">
            <div style={{backgroundColor:"white"}} className="box shadow-2xl shadow-gray-900">
              <div className="content">
                <img src="https://www.e-bureauet.dk/media/1062/competency-cms.svg" alt="" />
                <br />
                <p>Platform</p>
              </div>
              <div className="content-hover">
                <h1>Platform</h1>
                <p>We are specialised in different CMS platforms so we can offer the best advice for our clients</p>
              </div>
            </div>
          </div>
          <div  className=" col-md-3">
            <div style={{backgroundColor:"white"}} className="box shadow-2xl shadow-gray-900">
              <div className="content">
                <img src="https://www.e-bureauet.dk/media/1062/competency-cms.svg" alt="" />
                <br />
                <p>Platform</p>
              </div>
              <div className="content-hover">
                <h1>Platform</h1>
                <p>We are specialised in different CMS platforms so we can offer the best advice for our clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;