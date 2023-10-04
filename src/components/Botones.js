import React, { useState } from "react";
import "../styles/botones.css";
import Whatsapp from "../img/what.png";

import Insta from "../img/examen.png";
import { Link } from "react-router-dom";

const Botones = () => {
  return (
    <div className="container-btns">
      <Link to="formulario">
        <img src={Insta} alt="" />
      </Link>

      <a
        href="https://api.whatsapp.com/send/?phone=573228323376"
        onclick="return gtag_report_conversion('https://api.whatsapp.com/send?phone=573228323376');"
        className="icono_dos"
        target="_blank"
      >
        <img src={Whatsapp} alt="" />
      </a>
    </div>
  );
};

export default Botones;
