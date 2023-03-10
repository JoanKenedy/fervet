import React from "react";
import Mascota2 from "../img/planfervet.png";
import "../styles/planesfervet.css";

const PlanesFervet = () => {
  return (
    <div className="planes-fervet">
      <div className="item-planes-fervet">
        <p>
          Aprovecha los planes de salud para ahorrar dinero en la cobertura de
          servicios de medicina preventiva. Ponte en contacto con nosotros nos
          encargaremos de sus vacunas y de mantener la salud de tu mascota
        </p>

        <a
          href="https://api.whatsapp.com/send/?phone=573228323376"
          target="_blank"
        >
          Pide cita
        </a>
      </div>
      <div className="item-planes-fervet">
        <img src={Mascota2} alt="" className="mascota2" />
      </div>
    </div>
  );
};

export default PlanesFervet;
