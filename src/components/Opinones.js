import React from "react";
import Opinion1 from "../img/opinion-1.png";
import Opinion2 from "../img/opinion-2.png";
import Opinion3 from "../img/opinion-3.png";
import Opinion4 from "../img/opinion-4.png";
import "../styles/opinion.css";

const Opinones = () => {
  return (
    <div className="opiniones">
      <h2>Opiniones</h2>
      <div className="container-opiniones">
        <div className="item-opiniones">
          <img src={Opinion1} alt="" />
          <h6>Alexandra Torres</h6>
          <span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </span>
          <p>
            Es un lugar que tiene todo lo que un propietario necesita para
            llevar a su mascota y ponerlo en manos del Doctor con total
            tranquilidad, tienen experiencia y lo más importante para nosotros
            como dueños, aman su trabajo y amor genuino por los animales,
            prestan un excelente servicio, los recomiendo al 100%
          </p>
        </div>
        <div className="item-opiniones">
          <img src={Opinion2} alt="" />
          <h6>Juan Leal</h6>
          <span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </span>
          <p>
            La mejor veterinaria a la que he ido, lo más importante para
            resaltar es que son personas muy humanas las que trabajan allá y se
            enfocan más en la salud del añinas que en el negocio, súper
            recomendada.
          </p>
        </div>
        <div className="item-opiniones">
          <img src={Opinion3} alt="" />
          <h6>La Gran Colombia Empresa de Servicios Integrales</h6>
          <span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </span>
          <p>
            Muy buena atención, personal muy profesional y las instalaciones son
            muy completasles, prestan un excelente servicio, los recomiendo al
            100%
          </p>
        </div>
        <div className="item-opiniones">
          <img src={Opinion4} alt="" />
          <h6>Claudia Rincón</h6>
          <span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </span>
          <p>
            Excelente servicio recomiendo al 100% la atención al cliente de
            increíble calidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Opinones;
