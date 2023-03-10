import React from "react";
import Piecito from "../img/piecito-vacunacion.png";
import "../styles/bordedos.css";

const BordeDos = () => {
  return (
    <div className="borde-dos">
      <img src={Piecito} alt="" />
      <h2>
        Protocolo de vacunación <br /> para gato
      </h2>
    </div>
  );
};

export default BordeDos;
