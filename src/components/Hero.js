import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
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
import wats from "../img/whats.png";
import formulario from "../img/exam.png";

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
            delay: 4000,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a
              href="https://api.whatsapp.com/send/?phone=573228323376"
              target="_blank"
            >
              <img src={SliderOne} className="img_slider" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://api.whatsapp.com/send/?phone=573228323376"
              target="_blank"
            >
              <img src={SliderTwo} className="img_slider" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://api.whatsapp.com/send/?phone=573228323376"
              target="_blank"
            >
              <img src={PoratadaUno} className="img_slider" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://api.whatsapp.com/send/?phone=573228323376"
              target="_blank"
            >
              <img src={PoratadaDos} className="img_slider" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://api.whatsapp.com/send/?phone=573228323376"
              target="_blank"
            >
              <img src={PoratadaTres} className="img_slider" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://api.whatsapp.com/send/?phone=573228323376"
              target="_blank"
            >
              <img src={PoratadaCuatro} className="img_slider" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://api.whatsapp.com/send/?phone=573228323376"
              target="_blank"
            >
              <img src={PoratadaCinco} className="img_slider" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://api.whatsapp.com/send/?phone=573228323376"
              target="_blank"
            >
              <img src={PoratadaSeis} className="img_slider" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://api.whatsapp.com/send/?phone=573228323376"
              target="_blank"
            >
              <img src={PoratadaSiete} className="img_slider" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="modal-hero">
        <a
          href="https://wa.me/573228323376"
          className="btn_whats"
          target="_blank"
        >
          <img src={wats} /> Whatsapp
        </a>
        <Link to="formulario" className="btn_formulario">
          <img src={formulario} /> ¿Deseas que te contáctemos?
        </Link>
      </div>
    </div>
  );
};

export default Hero;
