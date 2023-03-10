import React from "react";
import Consulta from "../img/consulta-v.png";
import Desparacitacion from "../img/despara.png";
import Vacunacion from "../img/vacuna.png";
import Reproduccion from "../img/reproductiva.jpg";
import Profilaxis from "../img/profilaxis.jpg";
import Tejidos from "../img/tejidos.jpg";
import Radiografia from "../img/ecografia.jpg";
import "../styles/servicies.css";

const Servicies = () => {
  const datos = [
    {
      id: 1,
      imgSrc: Consulta,
      texto: "Consulta médica",
    },
    {
      id: 2,
      imgSrc: Desparacitacion,
      texto: "Desparasitación",
    },
    {
      id: 3,
      imgSrc: Vacunacion,
      texto: "Vacunación",
    },
    {
      id: 4,
      imgSrc: Reproduccion,
      texto: "Cirugías reproductivas",
    },
    {
      id: 5,
      imgSrc: Profilaxis,
      texto: "Profilaxis dental",
    },
    {
      id: 6,
      imgSrc: Tejidos,
      texto: "Cirugía de tejidos blandos",
    },
    {
      id: 7,
      imgSrc: Radiografia,
      texto: "radiografía y ecografía",
    },
  ];
  return (
    <div className="container-services">
      {datos.map((item, index) => (
        <div className="card-item" key={index}>
          <div className="card-item-top">
            <img src={item.imgSrc} alt="" />
          </div>
          <div className="card-item-bottom">
            <p>{item.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Servicies;
