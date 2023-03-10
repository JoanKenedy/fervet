import React from "react";
import Typical from "react-typical";
import Cirugia from "../img/quirofano.png";
import "../styles/hero-cirugias.css";
const Hero = () => {
  return (
    <>
      <div class="welcome">
        <Typical
          steps={[
            "Tus Mascotas en las mejores manos",
            2000,
            "Bienvenidos a Cirugías",
            2000,
          ]}
          loop={1}
          wrapper="p"
        />
      </div>
      <div className="hero-cirugia">
        <div className="item-hero-cirugia">
          <h2>Cirugía Veterinaria</h2>
          <p>
            Cuando nuestros veterinarios llevan a cabo una intervención
            quirúrgica en mascotas, se realizan siempre con las máximas medidas
            de seguridad. El protocolo de Fervet incluye pruebas preanestésicas,
            previas a la cirugía, para prevenir los riesgos durante la
            intervención. En todas las operaciones, por menores que sean,
            contamos siempre con equipo auxiliar cualificado además del
            veterinario o veterinaria cirujana. Tu mascota estará vigilada
            durante la cirugía y controlaremos su presión arterial, frecuencia
            cardíaca y el estado de oxigenación.
          </p>
        </div>
        <div className="item-hero-cirugia">
          <img src={Cirugia} alt="" />
          <a
            href="https://api.whatsapp.com/send/?phone=573228323376"
            target="_blank"
            className="btn-cirugia"
          >
            Pide Cita
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
