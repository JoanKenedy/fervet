import React from "react";
import DataJson from "../Json/data.json";
import "../styles/cinta.css";

const CintaTres = () => {
  return (
    <div className="cinta">
      <img src={require(`../img/${DataJson.img2}`)} alt="" />
      <h2>{DataJson.texto8}</h2>
    </div>
  );
};

export default CintaTres;
