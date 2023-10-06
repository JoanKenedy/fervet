import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import FotoUno from "../img/certificado_cuadrado.jpg";
import FotoDos from "../img/2x1_c.jpg";
import wats from "../img/whats.png";
import formulario from "../img/exam.png";
import { Link } from "react-router-dom";

import "../styles/promociones.css";

const Promociones = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="promociones">
      <div className="container-promociones">
        <div className="item-promociones" data-aos="fade-down">
          <img src={FotoDos} alt="" />
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
        <div className="item-promociones" data-aos="fade-up">
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

export default Promociones;
