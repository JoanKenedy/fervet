import React from "react";
import "../styles/cinta.css";
import DataJson from "../Json/data.json";

const Cinta = () => {
  return (
    <div className="cinta">
      <img src={require(`../img/${DataJson.img1}`)} alt="" />{" "}
      <h2>Promociones</h2>
    </div>
  );
};

export default Cinta;
