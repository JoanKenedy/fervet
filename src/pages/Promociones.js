import React from "react";
import HeroPromo from "../components/HeroPromo";
import Promos from "../components-promo/Promos";
import CintaCuatro from "../components-promo/CintaCuatro";
import CintaTres from "../components/CintaTres";
import Card from "../components-promo/Card";
import Contacto from "../components/Contacto";

const Promociones = () => {
  return (
    <div>
      <HeroPromo />
      <Promos />
      <CintaCuatro />
      <Card />
      <CintaTres />
      <Contacto />
    </div>
  );
};

export default Promociones;
