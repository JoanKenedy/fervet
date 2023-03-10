import React from "react";
import Forma from "../img/forma2.png";
import "../styles/hero-servicios.css";

const HeroServicios = () => {
  return (
    <div className="container-hero-servicios">
      <div className="text-hero-servicios">
        <p>
          Conoce más del
          <br />
          cuidado de tus
          <br />
          mascotas
          <br />
        </p>
        <a
          href="https://wa.me/573228323376"
          target="_blank"
          className="contact-hero-servicios"
        >
          Contacto
        </a>
      </div>
      <img src={Forma} alt="" className="forma-servicios" />
    </div>
  );
};

export default HeroServicios;
