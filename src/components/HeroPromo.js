import React from "react";
import Forma from "../img/forma.png";
import "../styles/hero-promo.css";

const HeroPromo = () => {
  return (
    <div className="container-hero-promo">
      <div className="text-hero-promo">
        <p>
          Servicios <br /> <span>y promociones</span>
        </p>
        <a
          href="https://wa.me/573228323376"
          target="_blank"
          className="contact-hero-promo"
        >
          Contacto
        </a>
      </div>
      <img src={Forma} alt="" className="forma-promo" />
    </div>
  );
};

export default HeroPromo;
