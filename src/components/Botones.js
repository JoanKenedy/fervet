import React, { useState } from "react";
import "../styles/botones.css";
import Whatsapp from "../img/whats.png";
import Facebook from "../img/facebook.png";
import Insta from "../img/instagram.png";

const Botones = () => {
  return (
    <div className="container-btns">
      <div className="all_redes">
        <a
          href="https://instagram.com/fervet.quirurgico?igshid=MzRlODBiNWFlZA=="
          className="icono_dos"
          target="_blank"
        >
          <img src={Insta} alt="" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100083396351978&mibextid=LQQJ4d"
          className="icono_dos"
          target="_blank"
        >
          <img src={Facebook} alt="" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=573228323376"
          onclick="return gtag_report_conversion('https://api.whatsapp.com/send?phone=573228323376');"
          className="icono_dos"
          target="_blank"
        >
          <img src={Whatsapp} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Botones;
