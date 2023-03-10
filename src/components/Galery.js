import React from "react";
import ImagenUno from "../img/foto-9.jpeg";
import ImagenDos from "../img/foto-9.png";
import ImagenTres from "../img/foto-11.jpeg";
import ImagenCuatro from "../img/foto-12.png";
import ImagenCinco from "../img/foto-14.png";
import ImagenSeis from "../img/foto-13.png";
import "../styles/galery.css";

const Galery = () => {
  return (
    <div className="galery">
      <div className="galery-container">
        <div className="galery-item">
          <img src={ImagenUno} alt="" />
        </div>
        <div className="galery-item">
          <img src={ImagenCinco} alt="" />
        </div>
        <div className="galery-item">
          <img src={ImagenTres} alt="" />
        </div>
        <div className="galery-item">
          <img src={ImagenCuatro} alt="" />
        </div>
        <div className="galery-item">
          <img src={ImagenDos} alt="" />
        </div>
        <div className="galery-item">
          <img src={ImagenSeis} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Galery;
