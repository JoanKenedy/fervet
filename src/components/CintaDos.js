import React from "react";
import Piecito from "../img/piecito-dos.png";
import "../styles/cinta-dos.css";

const CintaDos = () => {
  return (
    <div className="cinta-dos">
      <h2>Nuestra Clínica</h2> <img src={Piecito} alt="" />
    </div>
  );
};

export default CintaDos;
