import React from "react";
import FotoOne from "../img/promo-1-enero.jpg";
import FotoUno from "../img/promo-2-enero.jpg";

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
