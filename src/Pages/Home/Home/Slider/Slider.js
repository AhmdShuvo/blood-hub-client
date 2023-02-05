import React from 'react';


import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './slider.css'
import 'swiper/css/autoplay';
import { EffectCoverflow } from 'swiper';

const Slider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <center>
      <div className=" containerr">
        <Swiper effect={"coverflow"}
          centeredSlides={false}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,

            slideShadows: true
          }} className="containerr"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => swiper}
          // onSlideChange={() => console.log('slide change')}
         
        >
          <SwiperSlide><center><img className="w-auto object  img " src="https://thalassaemia.org.cy/wp-content/uploads/2021/06/WBDD-Visual-3.png" alt="" /></center></SwiperSlide>
          <SwiperSlide ><center><img className="w-auto object img " src="https://www.starhealth.in/blog/wp-content/uploads/2022/03/Blood-donation.jpg" alt="" /></center></SwiperSlide>
          <SwiperSlide><center><img className="w-auto  object img " src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/06/world-blood-donor-day-1655115531.jpg" alt="" /></center></SwiperSlide>
          <SwiperSlide><center><img className="w-auto  object img " src="https://motivirus.com/wp-content/uploads/2019/02/Motivational-Blood-donation-quotes-and-slogans.jpg" alt="" /></center></SwiperSlide>
          ...
        </Swiper>
      </div>
    </center>
  );
};

export default Slider;