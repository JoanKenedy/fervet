import React from "react";
import FotoUno from "../img/certificado_cuadrado.jpg";
import FotoOne from "../img/2x1_c.jpg";
import wats from "../img/whats.png";
import formulario from "../img/exam.png";
import { Link } from "react-router-dom";

import "../styles/promos.css";

const Promos = () => {
  return (
    <div className="container-promo-promo">
      <h2>Promociones del mes</h2>
      <div className="container-promotions">
        <div className="item-cate-promo">
          <img src={FotoOne} alt="" />
          <div className="modal-hero">
            <a
              href="https://wa.me/573228323376"
              className="btn_whats"
              target="_blank"
            >
              <img src={wats} className="img_btn" /> Whatsapp
            </a>
          </div>
        </div>
        <div className="item-cate-promo">
          <img src={FotoUno} alt="" />
          <div className="modal-hero">
            <Link to="formulario" className="btn_formulario">
              <img src={formulario} className="img_btn" /> ¿Deseas que te
              contáctemos?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promos;
