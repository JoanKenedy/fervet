import React from "react";
import Cinta from "../components/Cinta";
import CintaDos from "../components/CintaDos";
import Description from "../components/Description";
import Hero from "../components/Hero";
import Promociones from "../components/Promociones";
import Galery from "../components/Galery";
import CintaTres from "../components/CintaTres";
import Contacto from "../components/Contacto";
import CintaCuatro from "../components-promo/CintaCuatro";
import Opinones from "../components/Opinones";
import HomeServices from "../components/HomeServices";

function Home() {
  return (
    <div>
      <Hero />
      <Description />
      <CintaCuatro />
      <HomeServices />
      <Cinta />
      <Promociones />
      <CintaDos />
      <Galery />
      <Opinones />
      <CintaTres />
      <Contacto />
    </div>
  );
}

export default Home;
