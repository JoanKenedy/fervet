import React from "react";
import Calendario from "../img/calendar-dog.png";
import "../styles/vacunacion-cachorro.css";

const VacunaCachorro = () => {
  return (
    <div className="container-vacuna-cahorro">
      <div className="item-vacuna-cachorro">
        <h2>Primeras vacunas cachorro</h2>
        <img src={Calendario} alt="" />
      </div>
      <div className="item-vacuna-cachorro">
        <p>
          Desparasitacion Completa a los 2 meses de vida con vacuna puppy
          (distemper o moquillo , parvovirus , hepatitis). A los 15 días 1°
          dosis Pentavalente (parvovirus , distemper o moquillo , hepatitis ,
          parainfluenza y leptospira). A los 15 días 2da dosis de Pentavalente.
          A los 15 días Hexavalente (Esta se coloca anual por el resto de la
          vida). El esquema debe completarse con la vacuna BRONCHICINE, conocida
          comúnmente como “Tos de las perreras” (Una dosis inicial con refuerzo
          a los 15 dias y luego revacunación anual).
        </p>

        <a
          href="https://api.whatsapp.com/send/?phone=573228323376"
          target="_blank"
        >
          consultar precio
        </a>
      </div>
    </div>
  );
};

export default VacunaCachorro;
