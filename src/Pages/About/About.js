import React from 'react';
import './about.css'

const About = () => {
  return (
    <section className='about-container'>
      <section className='container-auto'>
        <center> <h1 className='text-red-600'>Our Goal</h1></center>
        <div className='Goal' style={{ fontFamily: "cursive", padding: '20px' }}>
          <center><h3 className='text-lg'>Our Main goal is to create a communication system with the blood donors and those who is in needed for emergency blood</h3></center>
          <p className='container text-lg mx-4 py-4 px-4'>Blood is the most precious gift that anyone can give to another person – the gift of life. <br /> A decision to donate your blood can save a life, or even several if your blood is separated into its components – red cells, platelets and plasma – which can be used individually for patients with specific conditions.</p>
        </div>
      </section>
      <center><h1 className='text-red-600'>Our Team Members </h1></center>
      <section className='developer-body'>

        <div class="container mx-4 py-4 px-4">
          <div class="grid md:grid-cols-4 gap-4">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="our-team">
                <div class="picture">
                  <img class="img-fluid" src="https://scontent.fdac146-1.fna.fbcdn.net/v/t39.30808-6/271995115_3120809278178725_4184070734605111682_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEaQuPcMLtwI13fnqnJAYWcPHl3ilpOpoA8eXeKWk6mgI1BdofYGl39PjM6ep_0Sng3DZWdBvDS69E6wk1Qr4uH&_nc_ohc=y67sGgnZGnoAX-kpx5c&_nc_ht=scontent.fdac146-1.fna&oh=00_AT-P6g4VkMp2K1YTBRbpQuNtASSKQahmSvYsqJOkC15wbA&oe=6269B9CC" />
                </div>
                <div class="team-content">
                  <h3 class="name">Arif Reza </h3>
                  <h4 class="title">Web Developer</h4>
                </div>
                <ul class="social">

                  <li><a href="https://github.com/arifrexa" class="fa fa-github" aria-hidden="true"></a></li>

                  <li><a href="https://www.linkedin.com/in/md-arif-rexa/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="our-team">
                <div class="picture">
                  <img class="" height='130px' src="https://scontent.fdac146-1.fna.fbcdn.net/v/t39.30808-6/273169042_320294090035764_4370449685666685955_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG29HwHzXiQZ6KzsnYdKjU7oDxQ_YQAhKWgPFD9hACEpUDRDre8JDM2m2jdFbKfodFQXTYUp9l7Amyia5dlOmvt&_nc_ohc=Uoy__3eHk14AX-a0ihN&tn=e1jvuiQdsqnYphIl&_nc_ht=scontent.fdac146-1.fna&oh=00_AT9Oru-2dT8dARm4PpzlrYGzkcj1WhB96sAavnIuZMu4NA&oe=626963A2" />
                </div>
                <div class="team-content">
                  <h3 class="name">Rafiun Vabna </h3>
                  <h4 class="title">Web Developer</h4>
                </div>
                <ul class="social">
                  <li><a href="https://github.com/vabnaweb" class="fa fa-github" aria-hidden="true"></a></li>
                  <li><a href="https://www.linkedin.com/in/rafiun-vabna/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="our-team">
                <div class="picture">
                  <img class="img-fluid" src="https://scontent.fdac146-1.fna.fbcdn.net/v/t39.30808-6/238749972_295254522363666_930819383632403742_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHFpZWa4FxJ1Q6Y-rFm5cN2kafOWJ2CBcCRp85YnYIFwDbbrLBLeEfkrU2Szbx-FpXWtT5xzm8S5omhE8Vknu7d&_nc_ohc=cZzevGPSQdEAX-4dwMJ&_nc_ht=scontent.fdac146-1.fna&oh=00_AT-bnvM2ikrNUOYZ-em8Hl0BxMY0TbCuRnbyQQZs-3kpdA&oe=6268685B" />
                </div>
                <div class="team-content">
                  <h3 class="name">Robiul Islam</h3>
                  <h4 class="title">Web Developer</h4>
                </div>
                <ul class="social">

                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-github" aria-hidden="true"></a></li>

                  <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="our-team">
                <div class="picture">
                  <img class="img-fluid" src="https://scontent.fdac146-1.fna.fbcdn.net/v/t1.6435-9/104267216_299863037854853_6310838099927091318_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=84a396&_nc_eui2=AeG_it4udNrTC_p_VlMg0crUObJAgzSBjlc5skCDNIGOV13mrobTuQiImyZtCjH2F8o7CsndKKXl4XmAeCNXVc2x&_nc_ohc=qEnoC61hcLEAX_bwyDe&tn=e1jvuiQdsqnYphIl&_nc_ht=scontent.fdac146-1.fna&oh=00_AT96Rdf1E6l7LxVIJTHc0jyDvC1C6iTRDPXmfUZPXoSA0A&oe=6289FD9F" />
                </div>
                <div class="team-content">
                  <h3 class="name">Tanjir Ahmed</h3>
                  <h4 class="title">Web Developer</h4>
                </div>
                <ul class="social">
                  <li><a href="https://github.com/AhmdShuvo" class="fa fa-github" aria-hidden="true"></a></li>
                  <li><a href="https://www.linkedin.com/in/tanjir-ahmed-a4216a199/" class="fa fa-linkedin" aria-hidden="true"></a></li>
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