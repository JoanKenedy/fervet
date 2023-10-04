import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/formulario.css";

const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h2zl3nr",
        "template_ycgu0uf",
        form.current,
        "RGS5NrstxG7vf6h22"
      )
      .then(
        (result) => {
          console.log("Todo ok");
          form.current.reset();
        },
        (error) => {
          console.log("Algo salio mal");
        }
      );
  };
  return (
    <>
      <div className="formulario">
        <div className="container-form">
          <h2>Contacto</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-container">
              <label>Nombre :</label>
              <input type="text" name="nombre" required />
            </div>
            <div className="input-container">
              <label>Nombre de la mascota :</label>
              <input type="text" name="mascota" required />
            </div>
            <div className="input-container">
              <label>Teléfono :</label>
              <input type="text" name="telefono" required />
            </div>
            <div className="input-container">
              <label>Correo :</label>
              <input type="email" name="correo" required />
            </div>
            <div className="input-container">
              <label>Especie :</label>
              <select name="especie" required>
                <option value="canino">Canino</option>
                <option value="felino">Felino</option>
                <option value="otros">Otros</option>
              </select>
            </div>
            <div className="input-container">
              <label>Asunto :</label>
              <select name="asunto" required>
                <option value="informacion">Información general </option>
                <option value="consulta">Agendamiento de consulta </option>
                <option value="spa">Agendamiento de spa </option>
                <option value="servicios">Información de servicios </option>
                <option value="pqr"> PQR</option>
                <option value="felicitaciones">Felicitaciones</option>
              </select>
            </div>
            <div className="input-container">
              <input type="submit" value="enviar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formulario;
