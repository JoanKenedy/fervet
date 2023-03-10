import React from "react";
import SliderOne from "../img/slider-enero-1.jpg";
import SliderTwo from "../img/slider-enero-2.jpg";
import PoratadaUno from "../img/slider-1.jpg";
import PoratadaDos from "../img/slider-2.jpg";
import PoratadaTres from "../img/slider-3.jpg";
import PoratadaCuatro from "../img/slider-4.jpg";
import PoratadaCinco from "../img/slider-5.jpg";
import PoratadaSeis from "../img/slider-6.jpg";
import PoratadaSiete from "../img/slider-7.jpg";

import "../styles/hero.css";

const Hero = () => {
  const images = [
    SliderOne,
    SliderTwo,
    PoratadaUno,
    PoratadaDos,
    PoratadaTres,
    PoratadaCuatro,
    PoratadaCinco,
    PoratadaSeis,
    PoratadaSiete,
  ];
  const [imagenActual, setImagenActual] = React.useState(0);

  const cantidad = images?.length;

  if (!Array.isArray(images) || cantidad === 0) {
    return;
  }

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };
  return (
    <div className="container-hero">
      <div className="container_slider">
        <button onClick={anteriorImagen} className="left_button">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        {images.map((image, index) => {
          return (
            <div>
              {imagenActual === index && (
                <img
                  key={index}
                  src={image}
                  alt="imagen"
                  className="img_slider"
                />
              )}
            </div>
          );
        })}

        <button onClick={siguienteImagen} className="right_button">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;
