import React, { useState } from "react";
import "../styles/botones.css";
import Whatsapp from "../img/whatsapp.png";
import Telefono from "../img/phone.png";
import Icono from "../img/icono_fervet.png";

const Botones = () => {
  const [isModel, setIsModel] = useState(false);
  const abrirBotones = () => setIsModel(!isModel);

  return (
    <div className="container-btns">
      <img
        src={Icono}
        alt=""
        className="icono_principal"
        onClick={abrirBotones}
      />
      <div className="btn-texto">
        <p>¡Da Click y contactanos!</p>
      </div>

      <div className={`img-iconos ${isModel && "aparecer"}`}>
        <a
          href="https://api.whatsapp.com/send/?phone=573228323376"
          onclick="return gtag_report_conversion('https://api.whatsapp.com/send?phone=573228323376');"
          className="icono_dos"
          target="_blank"
        >
          <img src={Whatsapp} alt="" />
        </a>
        <a href="tel:6017156662" onclick="return gtag_report_conversion('tel:6017156662');"  className="icono_dos" target="_blank">
          <img src={Telefono} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Botones;
