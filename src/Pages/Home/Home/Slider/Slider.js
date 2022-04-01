import React from 'react';


import { Navigation, Pagination, Scrollbar, A11y,controlled_swiper } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './slider.css'
import { EffectCoverflow } from 'swiper';
const Slider = () => {

    return (
      <center>
           <div className=" containerr ">
            <Swiper  effect={"coverflow"}
        centeredSlides={false}
    
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,

          slideShadows: true
        }}  className="containerr"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y,EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
      >
        <SwiperSlide><center><img class="w-auto object  img " src="./images/doctor.png" alt=""  /></center></SwiperSlide>
        <SwiperSlide ><center><img class="w-auto object img " src="./images/doctor.png" alt="" /></center></SwiperSlide>
        <SwiperSlide><center><img class="w-auto  object img "src="./images/doctor.png" alt="" /></center></SwiperSlide>
        <SwiperSlide><center><img class="w-auto  object img "src="./images/doctor.png" alt="" /></center></SwiperSlide>
        ...
      </Swiper>
       </div>
      </center>
    );
};

export default Slider;