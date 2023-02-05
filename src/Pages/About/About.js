import React from 'react';
import './about.css'

const About = () => {
  return (
    <section className='about-container mb-6'>
      <section className='container-auto'>
        <center> <h1 className='text-red-600 h1'>Our Goal</h1></center>
        <div className='Goal' style={{ fontFamily: "cursive", padding: '20px' }}>
          <center><h3 className='text-lg'>Our Main goal is to create a communication system with the blood donors and those who is in needed for emergency blood</h3></center>
          <p className='container text-lg mx-4 py-4 px-4'>Blood is the most precious gift that anyone can give to another person – the gift of life. <br /> A decision to donate your blood can save a life, or even several if your blood is separated into its components – red cells, platelets and plasma – which can be used individually for patients with specific conditions.</p>
        </div>
      </section>
      <center><h1 className='text-red-600 h1'>Our Team Members </h1></center>
      <section className='developer-body'>

        <div className="container mx-4 py-4 px-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src="./images/developers/arif rexa.jpg" />
                </div>
                <div className="team-content">
                  <h3 className="name">Arif Reza </h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">

                  <li><a href="https://github.com/arifrexa" className="fa fa-github" aria-hidden="true"></a></li>

                  <li><a href="https://www.linkedin.com/in/md-arif-rexa/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="" height='130px' src="./images/developers/rafiun-vabna.jpg" />
                </div>
                <div className="team-content">
                  <h3 className="name">Rafiun Vabna </h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li><a href="https://github.com/vabnaweb" className="fa fa-github" aria-hidden="true"></a></li>
                  <li><a href="https://www.linkedin.com/in/rafiun-vabna/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                </ul>
              </div>
            </div>
           
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="object-fit" src="./images/developers/shuvo.jpg" />
                </div>
                <div className="team-content">
                  <h3 className="name">Tanjir Ahmed</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">
                  <li><a href="https://github.com/AhmdShuvo" className="fa fa-github" aria-hidden="true"></a></li>
                  <li><a href="https://www.linkedin.com/in/tanjir-ahmd/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src="./images/developers/tanjir.jpg" />
                </div>
                <div className="team-content">
                  <h3 className="name">Robiul Islam</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
                <ul className="social">

                  <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-github" aria-hidden="true"></a></li>

                  <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;