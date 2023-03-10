import React from "react";
import "../styles/sabias.css";

const Sabias = () => {
  return (
    <div className="sabias">
      <h2>Cirugías Electivas</h2>
      <h6>¿Qué debes de saber?</h6>
      <div className="container-sabias">
        <div className="item-sabias">
          <p className="texto-numero">
            La orquiectomia (castracion de macho ) , ovariohisterectomia (
            castracion de hembra ) , son cirugías netamente reproductivas y se
            realizan de manera electiva , para cualquiera de ellas se requieren
            unos exámenes prequirurgicos para saber exactamente qué protocolo
            anestésico usar con cada paciente , ya que son cirugías que se
            realizan bajo anestesia general.
          </p>
          <p className="numero">1</p>
        </div>
        <div className="item-sabias">
          <p className="numero">2</p>
          <p className="texto-numero">
            La cirugía en el macho consiste en el retiro de ambos testículos y
            en la hembra en el retiró total de su útero incluidos los ovarios.
          </p>
        </div>
        <div className="item-sabias">
          <p className="texto-numero">
            En fervet mitigamos los riesgos quirúrgicos y anestésicos qué se
            pueden presentar ya que usamos protocolos anestésicos seguros ,
            manejamos anestésia inhalada y nuestros profesionales están
            capacitados para brindar los mejores servicios.
          </p>
          <p className="numero">3</p>
        </div>
        <div className="item-sabias">
          <p className="numero">4</p>
          <p className="texto-numero">
            Todo paciente al que se le realice cualquier procedimiento bajó
            anestesia en fervet tiene un acceso venoso y sonda traqueal para
            poder reaccionar en caso de cualquier emergencia que se llegue a
            presentar y en la zona de quirófano siempre contamos con telas
            quirúrgicas e Instrumental previamente esterilizado.
          </p>
        </div>
        <div className="item-sabias">
          <p className="texto-numero">
            Nuestros pacientes despues de cirugía tendrán en casa cuidados y
            manejo de una formula médica hecha para cada caso en particular .
            Normalmente el retiró de puntos sé realiza de 8 a 10 días después de
            la cirugía
          </p>
          <p className="numero">5</p>
        </div>
        <div className="item-sabias">
          <p className="numero">6</p>
          <p className="texto-numero">
            Ambos son procedimientos ambulatorios , es decir el mismo día al
            terminar procedimiento pueden ir a casa con sus tutores
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sabias;
