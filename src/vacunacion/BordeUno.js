import React from "react";
import Piecito from "../img/piecito.png";
import "../styles/bordeuno.css";

const BordeUno = () => {
  return (
    <div className="borde-uno">
      <img src={Piecito} alt="" />
      <h2>
        Protocolo de vacunación <br /> para perros
      </h2>
    </div>
  );
};

export default BordeUno;
