import React from "react";
import Piecito from "../img/piecito.png";
import Mascota from "../img/mascota-cita.png";
import "../styles/section-uno.css";

const SectionUno = () => {
  return (
    <div className="section-uno">
      <div className="item-section-uno">
        <div className="top-one">
          <h2>
            Vacunación <br /> Veterinaria
          </h2>
          <img src={Piecito} alt="" className="pie-mascota" />
        </div>
        <div className="top-two">
          <h2>LA IMPORTANCIA DE VACUNAR A TUS MASCOTAS</h2>
          <p>
            Se debe realizar medicina preventiva mediante un adecuado esquema de
            Vacunacion ya que nuestras mascotas están expuestas a diferentes
            agentes que pueden causarles mucho daño , incluso la muerte.
          </p>
          <p>
            Por esto es importante proteger a nuestros cachorros antes de
            poderlos llevar al parque a socializar con otras mascotas ya que los
            virus pueden estar por mucho tiempo libres en el ambiente y no
            pueden ser vistos con facilidad por nuestros ojos.
          </p>
        </div>
      </div>
      <div className="item-section-uno">
        <img src={Mascota} alt="" className="mascota" />
        <a
          href="https://api.whatsapp.com/send/?phone=573228323376"
          target="_blank"
        >
          Pide cita
        </a>
      </div>
    </div>
  );
};

export default SectionUno;
