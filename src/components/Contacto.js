import React from "react";
import Mapa from "../img/mapa.png";
import "../styles/contacto.css";

const Contacto = () => {
  return (
    <div className="contacto">
      <div className="container-contacto">
        <div className="item-contacto">
          <div className="sub-item-contacto">
            <a href="" target="_blank">
              <img src={Mapa} alt="" />
            </a>
          </div>
          <div className="sub-item-conatcto">
            <a
              href="https://goo.gl/maps/9U6AUnv46HmrGehw5"
              target="_blank"
              className="llegar"
            >
              ¿Cómo llegar?
            </a>
          </div>
        </div>
        <div className="item-contacto">
          <div className="sub-item-contacto">
            <h6>Llámanos al </h6>
            <p>6017156662</p>
            <p>3228323376</p>
          </div>
          <div className="sub-item-contacto">
            <h6>Dirección </h6>
            <p>Carrera 78 #7a-97,</p>
            <p>Segundo piso</p>
          </div>
          <div className="sub-item-contacto">
            <h6>Horario </h6>
            <p>Lunes a Sábado</p>
            <p>9:00am-19:00pm</p>
          </div>
          <div className="sub-item-contacto">
            <a
              href="https://wa.me/573228323376"
              target="_blank"
              className="btn-fondo"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
