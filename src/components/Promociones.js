import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import FotoUno from "../img/certificado_cuadrado.jpg";
import FotoDos from "../img/2x1_c.jpg";

import "../styles/promociones.css";

const Promociones = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="promociones">
      <div className="container-promociones">
        <div className="item-promociones" data-aos="fade-left">
          <img src={FotoDos} alt="" />
        </div>
        <div className="item-promociones" data-aos="fade-right">
          <img src={FotoUno} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Promociones;
