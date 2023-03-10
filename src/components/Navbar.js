import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo-fervet.png";
import MenuBar from "../img/menu-bar.svg";
import Desparasitacion from "../img/promo-web.png";
import Cerrar from "../img/cross.png";
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
                <a
                  href="https://wa.me/573228323376"
                  target="_blank"
                  className="contacto-header"
                >
                  Contacto
                </a>
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
        <div className="modal">
          <img src={Cerrar} alt="" id="cerrar" onClick={handleIsModal} />
          <div className="container-modal">
            <h2>¡ Aprovecha esta promoción !</h2>
            <p>solo válida en el sitio web</p>
            <img src={Desparasitacion} alt="" />
            <a
              href="https://wa.me/573228323376&text=Quiero la desparasitación gratis para mi mascota"
              target="_blank"
            >
              Quiero mi promoción
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
