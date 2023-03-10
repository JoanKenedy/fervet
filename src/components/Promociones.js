import React from "react";
import FotoUno from "../img/promo-1-enero.jpg";
import FotoDos from "../img/promo-2-enero.jpg";

import "../styles/promociones.css";

const Promociones = () => {
  return (
    <div className="promociones">
      <div className="container-promociones">
        <div className="item-promociones">
          <img src={FotoDos} alt="" />
        </div>
        <div className="item-promociones">
          <img src={FotoUno} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Promociones;
