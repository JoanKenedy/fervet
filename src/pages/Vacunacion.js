import React from "react";
import SectionUno from "../vacunacion/SectionUno";
import "../styles/section-uno.css";
import BordeUno from "../vacunacion/BordeUno";
import VacunaCachorro from "../vacunacion/VacunaCachorro";
import BordeDos from "../vacunacion/BordeDos";
import VacunaGato from "../vacunacion/VacunacionGato";
import BordeTres from "../vacunacion/BordeTres";
import PlanesFervet from "../vacunacion/PlanesFervet";
import BordeCuatro from "../vacunacion/BordeCuatro";
import Acordeon from "../vacunacion/Acordeon";
const Vacunacion = () => {
  return (
    <div className="container-vacunacion">
      <SectionUno />
      <BordeUno />
      <VacunaCachorro />
      <BordeDos />
      <VacunaGato />
      <BordeTres />
      <PlanesFervet />
      <BordeCuatro />
      <Acordeon />
    </div>
  );
};

export default Vacunacion;
