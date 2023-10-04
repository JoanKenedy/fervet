import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo-fervet.png";
import MenuBar from "../img/menu-bar.svg";
import Desparasitacion from "../img/certificado_cuadrado.jpg";
import Desp from "../img/2x1_c.jpg";
import Cerrar from "../img/cross.png";
import Facebook from "../img/facebook.png";
import Insta from "../img/instagram.png";
import Whatsapp from "../img/whats.png";

import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const [abrirModal, setIsModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleIsModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <header>
        <div className="container-menu">
          <img src={Logo} alt="" className="logo-fervet" />

          <nav className={`nav-menu ${isOpen && "open"}`}>
            <ul className="menu">
              <li>
                <Link to="/" onClick={handleIsOpen}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="promociones" onClick={handleIsOpen}>
                  Promociones
                </Link>
              </li>
              <li>
                <Link to="servicios" onClick={handleIsOpen}>
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="vacunacion" onClick={handleIsOpen}>
                  Vacunas
                </Link>
              </li>
              <li>
                <Link to="cirugia" onClick={handleIsOpen}>
                  Cirugía
                </Link>
              </li>
              <li>
                <div className="redes_header">
                  <a
                    href="https://instagram.com/fervet.quirurgico?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                    className="contacto-header"
                    onClick={handleIsOpen}
                  >
                    <img src={Insta} className="" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100083396351978&mibextid=LQQJ4d"
                    target="_blank"
                    className="contacto-header"
                    onClick={handleIsOpen}
                  >
                    <img src={Facebook} className="" />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=573228323376"
                    className="contacto-header"
                    onClick={handleIsOpen}
                    target="_blank"
                  >
                    <img src={Whatsapp} alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <img
            src={MenuBar}
            alt=""
            className="menu-bar"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </header>
      {abrirModal ? (
        <div className="modal" onClick={handleIsModal}>
          <img src={Cerrar} alt="" id="cerrar" />
          <div className="container-modal">
            <div className="modal-header">
              <h2>¡ Aprovecha nuestras promociones !</h2>
              <p>
                Contáctanos vía whatsapp o llena nuestro formulario en los
                botones de abajo
              </p>
            </div>
            <div className="modal-body">
              <img src={Desparasitacion} alt="" />
              <img src={Desp} />
            </div>
            <div className="modal-footer">
              <a href="https://wa.me/573228323376" target="_blank">
                Whatsapp
              </a>
              <Link to="formulario" className="btn_form">
                Llenar formulario
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
