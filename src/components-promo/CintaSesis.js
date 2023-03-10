import React from "react";
import DataJson from "../Json/data.json";
import "../styles/cintaseis.css";

const CintaSesis = () => {
  return (
    <div className="cinta">
      <img src={require(`../img/${DataJson.img2}`)} alt="" />{" "}
      <h2> Casos clínicos</h2>
    </div>
  );
};

export default CintaSesis;
