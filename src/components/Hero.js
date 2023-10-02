import React, { useRef, useState } from "react";
// Import Swiper React components
import SliderOne from "../img/certificado_slider.jpg";
import SliderTwo from "../img/2x1_slider.jpg";
import PoratadaUno from "../img/slider-1.jpg";
import PoratadaDos from "../img/slider-2.jpg";
import PoratadaTres from "../img/slider-3.jpg";
import PoratadaCuatro from "../img/slider-4.jpg";
import PoratadaCinco from "../img/slider-5.jpg";
import PoratadaSeis from "../img/slider-6.jpg";
import PoratadaSiete from "../img/slider-7.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="container_slider">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={SliderOne} className="img_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SliderTwo} className="img_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PoratadaUno} className="img_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PoratadaDos} className="img_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PoratadaTres} className="img_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PoratadaCuatro} className="img_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PoratadaCinco} className="img_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PoratadaSeis} className="img_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={PoratadaSiete} className="img_slider" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
