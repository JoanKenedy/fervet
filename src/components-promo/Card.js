import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Caso7 from "../img/servicios/desparacitacion.jpg";
import Caso8 from "../img/servicios/vacunacion.jpg";
import Caso10 from "../img/servicios/consulta-medica.jpg";
import Caso11 from "../img/servicios/repro.jpg";
import Caso12 from "../img/servicios/profilaxis.jpg";
import Caso13 from "../img/servicios/cirugia.jpg";
import Caso14 from "../img/servicios/ecografia.jpg";
import "../styles/slider.css";

const Card = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  const slides = [
    {
      id: 1,
      img: Caso7,
      title: "desparasitación",
      description:
        " Consiste en la administración de fármacos para ayudar a nuestro peludo a combatir contra esos agentes que no deseamos estén en su tracto intestinal y que sabemos les causan malestar y diferentes trastornos.  Se debe realizar al menos dos veces al año.",
    },
    {
      id: 2,
      img: Caso8,
      title: "vacunación",
      description:
        "Es el método por el cual brindamos anticuerpos a nuestras mascotas para poder hacerle frente a los diferentes virus que los rodean. Esta  deberá iniciar en el cachorro como primovacunacion y anualmente se debe realizar un refuerzo de estas. ",
    },
    {
      id: 3,
      img: Caso10,
      title: "consulta médica ",
      description:
        "Consta de una exploración física de cabeza a cola realizada por un médico veterinario en la cual se medirán constantes fisiológicas y se determinará si el paciente presenta signos o síntomas para la búsqueda de un diagnóstico y tratamiento temprano de las diferentes enfermedades.",
    },
    {
      id: 4,
      img: Caso11,
      title: "cirugias reproductivas",
      description:
        "Son realizadas tanto en hembras como en machos e inicialmente su principal fin fue el control de población y preñeces no deseadas pero adicional a eso nos brindan beneficios como prevención de diversas patologías en nuestras mascotas. ",
    },
    {
      id: 5,
      img: Caso12,
      title: "profilaxis dental ",
      description:
        "Es un procedimiento que siempre se deberá realizar bajo anestesia general y consiste en retirar todo el contenido de placa bacteriana acumulado sobre las piezas dentales de tu mascota. Normalmente se presenta por no tener buenos hábitos alimenticios. ",
    },
    {
      id: 6,
      img: Caso13,
      title: " cirugía de tejidos blandos  ",
      description:
        "Estamos capacitados para ayudar en las diferentes adversidades sea por patologías o por traumatismos generados a nuestras mascotas , con el personal y herramientas necesarias para prestar un servicio digno.  ",
    },
    {
      id: 7,
      img: Caso14,
      title: "radiografía y ecografía  ",
      description:
        "Trabajamos de la mano con los mejores especialistas del país para poder brindar el acompañamiento oportuno por medio de imagenologia veterinaria al diagnóstico de tu mascota ",
    },
  ];

  return (
    <div className="container-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div className="card">
            <div className="card-top">
              <img src={slide.img} alt="" />
            </div>
            <div className="card-bottom">
              <h6>{slide.title}</h6>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
