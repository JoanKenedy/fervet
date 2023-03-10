import React from "react";
import CasosGalery from "../components-promo/CasosGalery";
import CintaCuatro from "../components-promo/CintaCuatro";
import CintaSesis from "../components-promo/CintaSesis";
import HeroServicios from "../components-promo/HeroServicios";
import Servicies from "../components-promo/Servicies";
import Video from "../components-promo/Video";
import CintaTres from "../components/CintaTres";
import Contacto from "../components/Contacto";

const Servicios = () => {
  return (
    <div>
      <HeroServicios />
      <Video />
      <CintaSesis />
      <CasosGalery />
      <CintaCuatro />
      <Servicies />
      <CintaTres />
      <Contacto />
    </div>
  );
};

export default Servicios;
