import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Mascota from "../img/cachorros.jpg";
import "../styles/description.css";

const Description = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="description">
      <h2>Veterinaria Bogotá</h2>
      <div className="container-description">
        <div className="item-description" data-aos="fade-down">
          <p>
            Somos una entidad colombiana especializada en la prevención,
            diagnóstico y tratamiento de diversas enfermedades que afectan a las
            mascotas. Nuestro enfoque principal se centra en procedimientos
            quirúrgicos para garantizar su bienestar. Contamos con un equipo
            humano altamente capacitado y la tecnología para brindar un servicio
            de calidad. Además, ofrecemos servicios de Grooming para consentir y
            darle estilo a estos seres que alegran nuestras vidas. ¡Bienvenidos
            a Fervet!
          </p>
        </div>
        <div className="item-description" data-aos="fade-up">
          <img src={Mascota} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Description;
