import React from "react";
import Piecito from "../img/piecito.png";
import "../styles/bordeuno.css";

const BordeTres = () => {
  return (
    <div className="borde-uno">
      <img src={Piecito} alt="" />
      <h2>
        Ahorra en las vacunas con <br /> los planes de FERVET
      </h2>
    </div>
  );
};

export default BordeTres;
