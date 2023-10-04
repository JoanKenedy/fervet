import React from "react";
import FotoUno from "../img/certificado_cuadrado.jpg";
import FotoOne from "../img/2x1_c.jpg";

import "../styles/promos.css";

const Promos = () => {
  return (
    <div className="container-promo-promo">
      <h2>Promociones del mes</h2>
      <div className="container-promotions">
        <div className="item-cate-promo">
          <img src={FotoOne} alt="" />
        </div>
        <div className="item-cate-promo">
          <img src={FotoUno} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Promos;
