import React from "react";
import Piecito from "../img/piecito-vacunacion.png";
import "../styles/bordedos.css";

const BordeCuatro = () => {
  return (
    <div className="borde-dos">
      <img src={Piecito} alt="" />
      <h2>Preguntas Frecuentes</h2>
    </div>
  );
};

export default BordeCuatro;
