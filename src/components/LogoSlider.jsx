import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Images
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";

function ClientLogosSlider() {
  return (
    <div className="client-logos-container mt-5">
      <div className="logo-shadow left-shadow"></div>
      
      <Swiper
        slidesPerView={5}  
        spaceBetween={40}  
        freeMode={true}     
        loop={true}        
        autoplay={{
          delay: 0,        
          disableOnInteraction: false,
        }}
        speed={3000}       
        modules={[Autoplay, FreeMode]}
      >
        <SwiperSlide><img src={logo1} alt="Client Logo" /></SwiperSlide>
        <SwiperSlide><img src={logo2} alt="Client Logo" /></SwiperSlide>
        <SwiperSlide><img src={logo3} alt="Client Logo" /></SwiperSlide>
        <SwiperSlide><img src={logo4} alt="Client Logo" /></SwiperSlide>
        <SwiperSlide><img src={logo5} alt="Client Logo" /></SwiperSlide>
        <SwiperSlide><img src={logo6} alt="Client Logo" /></SwiperSlide>
      </Swiper>
      
      <div className="logo-shadow right-shadow"></div>
    </div>
  );
}

export default ClientLogosSlider;
