import React from "react";
import DataJson from "../Json/data.json";
import "../styles/cinta.css";

const CintaCuatro = () => {
  return (
    <div className="cinta-dos">
      <h2>{DataJson.texto5}</h2>{" "}
      <img src={require(`../img/${DataJson.img2}`)} alt="" />
    </div>
  );
};

export default CintaCuatro;
