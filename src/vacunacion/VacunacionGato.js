import React from "react";
import Calendario from "../img/calendar-cat.png";
import "../styles/vacunacion-gato.css";

const VacunaGato = () => {
  return (
    <div className="container-vacuna-cahorro">
      <div className="item-vacuna-cachorro">
        <h2>Primeras vacunas gato</h2>
        <img src={Calendario} alt="" />
      </div>
      <div className="item-vacuna-cachorro">
        <p>
          También deben contar con su esquema vacunal al día pero siempre la
          recomendación será manejar a nuestros gaticos en casa ,
          afortunadamente ellos pueden desempeñar todas sus funciones con
          libertad en casa como por ejemplo ir al baño. Ya que fuera hay muchos
          gaticos sin hogar que no cuentan con vacunas o algún protocolo de
          salud y pueden contagiar a nuestras mascotas. En el caso de los gatos
          hay enfermedades que no tienen vacuna , no se curan y si pueden llegar
          a ser letales como el virus de la inmunodeficiencia felina y la
          peritonitis infecciosa felina.
        </p>

        <a
          href="https://api.whatsapp.com/send/?phone=573228323376"
          target="_blank"
        >
          consultar precio
        </a>
      </div>
    </div>
  );
};

export default VacunaGato;
