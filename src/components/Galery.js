import React, { useEffect } from "react";
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
import "../styles/galery.css";

const Galery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
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
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenSiete} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenOcho} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenNueve} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenDiez} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenOnce} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenDoce} alt="" />
        </div>
        <div className="galery-item" data-aos="zoom-in-down">
          <img src={ImagenTrece} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Galery;
