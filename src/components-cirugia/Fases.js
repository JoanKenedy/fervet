import React from "react";
import { useState } from "react";
import "../styles/acordeon2.css";

const Fases = () => {
  const general = [
    {
      title: "Fase 1: Chequeo preoperatorio",
      texto:
        "  Realizamos una exploración física general y analítica sanguínea. Además, en los casos de pacientes geriátricos o de mayor riesgo completamos con radiografía y/o ecocardiografía.  ",
    },
    {
      title: "Fase 2: Anestesia",
      texto:
        "Monitoreamos durante toda la cirugía los diferentes niveles de presión arterial, frecuencia cardiaca y respiratoria, la temperatura corporal y el nivel de oxígeno. ",
    },

    {
      title: "Fase 3: Control del dolor",
      texto:
        "Se establecen protocolos analgésicos de manera individualizada en función del tipo de cirugía. Se establece un protocolo intraoperatorio y se prescribe un plan adecuado para los días posteriores a la intervención.",
    },

    {
      title: "Fase 4: Cuidado postoperatorio",
      texto:
        "Una vez concluida la cirugía, el paciente pasa a la zona de hospitalización para que se recupere en una ambiente tranquilo, ya que después de una intervención los pacientes tienen hipersensibilidad a los estímulos lumínicos y sonoros. El personal auxiliar controla en todo momento al paciente asegurándose de que se recupera correctamente de la intervención.",
    },
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="container-general">
      <h2>Fases de la cirugía</h2>
      <div className="wraper">
        {general.map((item, i) => (
          <div className="item-acordeon">
            <div className="title-acordeon" onClick={() => toggle(i)}>
              <h5>{item.title}</h5>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <p>{item.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fases;
