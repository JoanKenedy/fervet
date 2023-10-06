import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ImagenUno from "../img/f-1.jpg";
import ImagenDos from "../img/f-2.jpg";
import ImagenTres from "../img/f-3.jpg";
import ImagenCuatro from "../img/f-4.jpg";
import ImagenCinco from "../img/f-5.jpg";
import ImagenSeis from "../img/f-6.jpg";
import ImagenSiete from "../img/f-7.jpg";
import ImagenOcho from "../img/f-8.png";
import ImagenNueve from "../img/f-9.jpg";
import ImagenDiez from "../img/f-10.jpg";
import ImagenOnce from "../img/f-11.jpg";
import ImagenDoce from "../img/f-12.jpg";
import ImagenTrece from "../img/f-13.jpg";
import Tache from "../img/cross.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "../styles/galery.css";

const Galery = () => {
  const [isFotos, setIsFotos] = useState(false);
  const modalGalery = () => {
    setIsFotos(!isFotos);
  };
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="galery">
      <div className="galery-container">
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenUno} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenCinco} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenTres} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenCuatro} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenDos} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenSeis} alt="" />
        </div>
      </div>
      <button className="btn-galeria" onClick={modalGalery}>
        Galeria completa
      </button>
      <div className={` galery-fotos ${isFotos && "isModalFotos"}`}>
        <img src={Tache} className="tache" onClick={modalGalery} />
        <div className="container-fotos">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
            }}
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={ImagenUno} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenDos} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenTres} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenCuatro} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenCinco} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenSeis} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenSiete} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenOcho} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenNueve} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenDiez} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenOnce} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenDoce} className="img_slider" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagenTrece} className="img_slider" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Galery;
