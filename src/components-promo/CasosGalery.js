import React, { useState } from "react";
import ImagenUno from "../img/galery-1.png";
import ImagenDos from "../img/galery-4.png";
import ImagenTres from "../img/galery-9.png";
import ImagenCuatro from "../img/galery-5.png";
import ImagenCinco from "../img/galery-6.png";
import ImagenSeis from "../img/galery-7.png";
import ImagenSiete from "../img/galery-8.png";
import ImagenOcho from "../img/galery-15.png";
import ImagenNueve from "../img/galery-3.png";
import ImagenDiez from "../img/galery-3.png";
import ImagenOnce from "../img/galery-8.png";
import ImagenDoce from "../img/galery-12.png";
import ImagenTrece from "../img/galery-14.png";
import ImagenCatorce from "../img/galery-11.png";
import Cerrar from "../img/cross.png";
import "../styles/cases.css";

const CasosGalery = () => {
  let data = [
    {
      id: 1,
      imgSrc: ImagenUno,
      texto: "Tinto muy Feliz despues de su baño",
    },
    {
      id: 2,
      imgSrc: ImagenTres,
      texto: "Pacientes y propietarios felices",
    },
    {
      id: 3,
      imgSrc: ImagenDos,
      texto:
        "Max tuvo un accidente con un vehiculo Motorizado en el que sé vio afectado su miembro anterior izquierdo",
    },
    {
      id: 4,
      imgSrc: ImagenCuatro,
      texto: "Copérnico con su tutor despues del dia de baño",
    },
    {
      id: 5,
      imgSrc: ImagenCinco,
      texto: "Winter y balto listos para consulta",
    },
    {
      id: 6,
      imgSrc: ImagenSeis,
      texto: "Mocca esperando por su vacuna",
    },
    {
      id: 7,
      imgSrc: ImagenSiete,
      texto: "Qué linda que soy",
    },
    {
      id: 8,
      imgSrc: ImagenOcho,
      texto: "mela recuperada por completo en casa",
    },
    {
      id: 9,
      imgSrc: ImagenNueve,
    },
    {
      id: 10,
      imgSrc: ImagenDiez,
    },
    {
      id: 11,
      imgSrc: ImagenOnce,
    },
    {
      id: 12,
      imgSrc: ImagenDoce,
      texto: "Los guardianes de FERVET",
    },
    {
      id: 13,
      imgSrc: ImagenTrece,
      texto: "Hachy posando para la foto",
    },
    {
      id: 14,
      imgSrc: ImagenCatorce,
      texto: "Celeste despues de una sesión de masajes y cepillado",
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [temTexto, setTemTexto] = useState("");
  const getImg = (imgSrc, texto) => {
    setTempImgSrc(imgSrc);
    setTemTexto(texto);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <p>{temTexto}</p>
        <img
          src={Cerrar}
          alt=""
          className="cerrar"
          onClick={() => setModel(false)}
        />
      </div>
      <div className="title">
        <p>Galeria de nuestros casos clínicos</p>
        <span>Haz click para ver las fotos en grande</span>
      </div>
      <div className="gallery-cases">
        {data.map((item, index) => (
          <div
            className="pics-name"
            key={index}
            onClick={() => getImg(item.imgSrc, item.texto)}
          >
            <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
            <div className="text-pie">
              <p>{item.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CasosGalery;
