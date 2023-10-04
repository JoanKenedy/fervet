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
        <div className="item-description" data-aos="fade-right">
          <p>
            Somos una entidad colombiana especializada en la salud preventiva,
            diagnóstico y tratamiento de las diferentes patologías que afectan a
            nuestros preciados animales de compañía y con las cuales nos
            enfrentamos los médicos veterinarios en la clínica diaria. Tenemos
            énfasis en procedimientos quirúrgicos con el fin de salvaguardar el
            bienestar de nuestras mascotas, adicional contamos con el equipo
            humano y la tecnología necesaria para brindar un excelente servicio,
            así como nuestro espacio de Grooming en donde podemos consentir y
            darle mucho estilo a estos seres maravillosos que nos alegran
            siempre la vida.
          </p>
        </div>
        <div className="item-description" data-aos="fade-left">
          <img src={Mascota} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Description;
