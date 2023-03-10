import React, { useState } from "react";
import { Link } from "react-router-dom";
import Consulta from "../img/consulta-v.png";
import Desparacitacion from "../img/despara.png";
import Vacunacion from "../img/vacuna.png";
import Reproduccion from "../img/reproductiva.jpg";
import Profilaxis from "../img/profilaxis.jpg";
import Tejidos from "../img/tejidos.jpg";
import Radiografia from "../img/ecografia.jpg";
import Cerrar from "../img/cross.png";
import "../styles/homeservices.css";

const HomeServices = () => {
  const date = [
    {
      id: 1,
      imgSrc: Consulta,
      texto: "Consulta médica",
      description:
        "Consta de una exploración física de cabeza a cola realizada por un médico veterinario en la cual se medirán constantes fisiológicas y se determinará si el paciente presenta signos o síntomas para la búsqueda de un diagnóstico y tratamiento temprano de las diferentes enfermedades.",
      link: "promociones",
      texto2: "Ir a promociones",
    },
    {
      id: 2,
      imgSrc: Desparacitacion,
      texto: "Desparasitación",
      description:
        " Consiste en la administración de fármacos para ayudar a nuestro peludo a combatir contra esos agentes que no deseamos estén en su tracto intestinal y que sabemos les causan malestar y diferentes trastornos.  Se debe realizar al menos dos veces al año.",
      link: "promociones",
      texto2: "Ir a promociones",
    },
    {
      id: 3,
      imgSrc: Vacunacion,
      texto: "Vacunación",
      description:
        "Es el método por el cual brindamos anticuerpos a nuestras mascotas para poder hacerle frente a los diferentes virus que los rodean. Esta  deberá iniciar en el cachorro como primovacunacion y anualmente se debe realizar un refuerzo de estas. ",
      link: "vacunacion",
      texto2: "Ir a vacunas",
    },
    {
      id: 4,
      imgSrc: Reproduccion,
      texto: "Cirugías reproductivas",
      description:
        "Son realizadas tanto en hembras como en machos e inicialmente su principal fin fue el control de población y preñeces no deseadas pero adicional a eso nos brindan beneficios como prevención de diversas patologías en nuestras mascotas. ",
      link: "promociones",
      texto2: "Ir a promociones",
    },
    {
      id: 5,
      imgSrc: Profilaxis,
      texto: "Profilaxis dental",
      description:
        "Es un procedimiento que siempre se deberá realizar bajo anestesia general y consiste en retirar todo el contenido de placa bacteriana acumulado sobre las piezas dentales de tu mascota. Normalmente se presenta por no tener buenos hábitos alimenticios. ",
      link: "promociones",
      texto2: "Ir a promociones",
    },
    {
      id: 6,
      imgSrc: Tejidos,
      texto: "Cirugía de tejidos blandos",
      description:
        "Estamos capacitados para ayudar en las diferentes adversidades sea por patologías o por traumatismos generados a nuestras mascotas , con el personal y herramientas necesarias para prestar un servicio digno.  ",
      link: "promociones",
      texto2: "Ir a promociones",
    },
    {
      id: 7,
      imgSrc: Radiografia,
      texto: "radiografía y ecografía",
      description:
        "Trabajamos de la mano con los mejores especialistas del país para poder brindar el acompañamiento oportuno por medio de imagenologia veterinaria al diagnóstico de tu mascota ",
      link: "promociones",
      texto2: "Ir a promociones",
    },
  ];
  const [modal, setModal] = useState(false);
  const [temTexto, setTemTexto] = useState("");
  const [temDesc, setTemDesc] = useState("");
  const [temLink, setTemLink] = useState("");
  const [temBtn, setTemBtn] = useState("");
  const getText = (texto, description, link, texto2) => {
    setTemTexto(texto);
    setTemDesc(description);
    setTemLink(link);
    setTemBtn(texto2);
    setModal(true);
  };
  return (
    <div className="services-home">
      <div
        className={modal ? "modal-init open" : "modal-init"}
        onClick={() => setModal(false)}
      >
        <img
          src={Cerrar}
          alt=""
          className="cerrar-icon"
          onClick={() => setModal(false)}
        />
        <div className="container-services-init">
          <h2>{temTexto}</h2>
          <p>{temDesc}</p>
          <Link to={temLink} target="_blank">
            {temBtn}
          </Link>
        </div>
      </div>
      <div className="container-services-home">
        {date.map((item, index) => (
          <div
            className="item-services-home"
            key={index}
            onClick={() =>
              getText(item.texto, item.description, item.link, item.texto2)
            }
          >
            <img src={item.imgSrc} alt="" />
            <p>{item.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
