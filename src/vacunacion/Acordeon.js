import React from "react";
import { useState } from "react";
import "../styles/acordeon.css";

const Acordeon = () => {
  const general = [
    {
      title: "¿Es obligatorio vacunar a tu mascota?",
      texto:
        " La única vacuna OBLIGATORIA en colombia es la vacuna antirrabica , esto para cumplir lo que la ley dice.  ",
      texto2:
        "Pero pensando en la salud de nuestra mascota son NECESARIAS  todas las vacunas del esquema que manejamos , ya que son las enfermedades que comun mente atacan y qué tienen una alta Morbilidad y mortalidad , sin comentar los costosos tratamientos qué conllevan.",
      texto3:
        "En conclusión para evitar enfermedades graves y ademas cumplir con lo establecido debes realizar el esquema de vacunación a tu mascota.",
    },
    {
      title: "¿Las dosis de recuerdo son obligatorias?",
      texto:
        "Las mascotas necesitan de las vacunas para prevenir enfermedades causadas por virus y bacterias, en el momento en qué vacunamos a nuestras mascotas se produce una reacción inmunologica còmo respuesta a los agentes que lleva la vacuna , còmo resultado de esto nuestra mascota genera anticuerpos para poder combatir dichas enfermedades. ",
      texto2:
        "En colombia se exige re vacunación anual de la vacuna de la rabia , en caso de tener un imprevisto en el qué este envuelta tu mascota sí su carnet no es vigente vas a Presentar problemas mayores.",
    },

    {
      title: "He adoptado a un perro o gato ¿debo vacunarlo?",
      texto:
        "En el caso de pacientes adultos también van es necesario realizar la vacunación, con la diferencia de que el esquema no sé manejará còmo en cachorros. En un paciente adulto bastara con relaizar el refuerzo anual , es decir una vacuna polivalente en la cual van todos los virus del esquema incluido rabia y posterior re vacunación anual.",
    },

    {
      title: "¿Cuáles son las reacciones más frecuentes tras la vacuna?",
      texto:
        "Dentro de las reacciones postvacunales màs frecuentes y esperadas sé encuentran , decaimiento , inapetencia , en algunos casos fiebre transitoria , pero todos estos signos y síntomas sòlo deberán presentarse en las primeras 24 horas post vacunación. ",
      texto2:
        "En algunos casos , mucho menos frecuente , el paciente puede presentar una reacción anafilactica a la vacuna ( normalmente a algunos de sus Vehículos o diluyentes ) en este caso notaras qué tu mascota presenta una inflamación muy aguda en todo su cuerpo , principalmente en la cara . Sí tu Perro presenta este tipo de reacciones despues de vacunarlo debes llevarlo de inmediato a la clínica para ser atendido lo antes posible.",
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
      <div className="wraper">
        {general.map((item, i) => (
          <div className="item-acordeon">
            <div className="title-acordeon" onClick={() => toggle(i)}>
              <h5>{item.title}</h5>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <p>{item.texto}</p>
              <p>{item.texto2}</p>
              <p>{item.texto3}</p>
              <p>{item.texto4}</p>
              <p>{item.texto5}</p>
              <p>{item.texto6}</p>
              <p>{item.texto7}</p>
              <p>{item.texto8}</p>
              <p>{item.texto9}</p>
              <p>{item.texto10}</p>
              <p>{item.texto11}</p>
              <p>{item.texto12}</p>
              <p>{item.texto13}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acordeon;
