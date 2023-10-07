import React from "react";
import Opinion1 from "../img/opinion-1.png";
import Opinion2 from "../img/opinion-2.png";
import Opinion3 from "../img/opinion-3.png";
import Opinion4 from "../img/opinion-4.png";
import erica from "../img/erica.png";
import robinson from "../img/robinson.png";
import monica from "../img/monica.png";
import johana from "../img/johana.png";
import patricia from "../img/galvis.png";
import ana from "../img/ana.png";
import viki from "../img/victoria.png";
import judhit from "../img/judhit.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "../styles/opinion.css";

const Opinones = () => {
  return (
    <>
      <div className="opiniones">
        <div className="container-opiniones">
          <div className="slider-compu">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              speed={1500}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper "
            >
              <SwiperSlide className="slider-slider">
                <div className="item-opiniones">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={Opinion1} alt="" />
                    <h6>Alexandra Torres</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      Es un lugar que tiene todo lo que un propietario necesita
                      para llevar a su mascota y ponerlo en manos del Doctor con
                      total tranquilidad, tienen experiencia y lo más importante
                      para nosotros como dueños, aman su trabajo y amor genuino
                      por los animales, prestan un excelente servicio, los
                      recomiendo al 100%
                    </p>
                  </a>
                </div>
                <div className="item-opiniones item-comodin">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={Opinion2} alt="" />
                    <h6>Diego Leal</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      La mejor veterinaria a la que he ido, lo más importante
                      para resaltar es que son personas muy humanas las que
                      trabajan allá y se enfocan más en la salud del añinas que
                      en el negocio, súper recomendada.
                    </p>
                  </a>
                </div>
                <div className="item-opiniones item-comodin">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={Opinion3} alt="" />
                    <h6>La Gran Colombia Empresa de Servicios Integrales</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      Muy buena atención, personal muy profesional y las
                      instalaciones son muy completasles, prestan un excelente
                      servicio, los recomiendo al 100%
                    </p>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slider-slider">
                <div className="item-opiniones">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={Opinion4} alt="" />
                    <h6>Claudia Rincón</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      Excelente servicio recomiendo al 100% la atención al
                      cliente de increíble calidad
                    </p>
                  </a>
                </div>
                <div className="item-opiniones item-comodin">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={erica} alt="" />
                    <h6>Erica Delgado</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      Felicitaciones a los Cirujanos y equipo de trabajo y mis
                      más sinceros agradecimientos con el excelente y oportuno
                      diagnóstico y realización de su cirugía maxilar a mi
                      Gatica Tiky Mendez 😽💖
                    </p>
                  </a>
                </div>
                <div className="item-opiniones item-comodin">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={robinson} alt="" />
                    <h6>Robinson hurtado garcia</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      Muy recomendado. La mejor clínica veterinaria en Castilla.
                      El dr. Nicolás además de ser un gran profesional es muy
                      comprometido con sus pacientes y se nota el amor que tiene
                      por su trabajo. Nuestra gata se encuentra muy bien gracias
                      a él y a su equipo de trabajo.
                    </p>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slider-slider">
                <div className="item-opiniones">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={monica} alt="" />
                    <h6>Monica Triana</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      Muy recomendado! Había llevado a mi perrita a diferentes
                      sitios y no habían logrado diagnosticarla de manera
                      correcta, siempre me enviaban a hacerle baños medicados,
                      darle la pastilla de la pulga, desparasitar, etc. En
                      FERVET el veterinario Nicolás fue muy preciso con lo que
                      tenía mi perrita y sobre el tratamiento que debía seguir
                      con ella.
                    </p>
                  </a>
                </div>
                <div className="item-opiniones item-comodin">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={johana} alt="" />
                    <h6>johanna forero</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      Quisiera agrader mucho al Dr Nicolás por si
                      profesionalismo y carisma hacia si profesión y también a
                      su auxiliar Tania por la amabilidad .siempre desde hace
                      dos años llevamos nuestras mascotas a la clínica así nos
                      quede lejos de nuestro domicilio. Porque estamos seguros
                      de que el hace por nuestros amigos de 4 patas lo que el
                      haría por sus amigos de compañía ....estoy inmensamente
                      agradecida. Con ellos ...los súper recomiendo muy buena
                      atención y entrega .a sus pacientes .gracias
                    </p>
                  </a>
                </div>
                <div className="item-opiniones item-comodin">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={patricia} alt="" />
                    <h6>Patricia Galvis</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      Quiero agradecer al doctor Nicolás por el magnífico
                      profesional que es, desde el primer momento nos dimos
                      cuenta del amor que le tiene a los perritos y de su
                      profesionalismo, mi perrita tuvo una cirugía compleja pero
                      gracias a el salió muy bien, de verdad que es un gusto
                      poder encontrar una veterinaria donde se preocupen por
                      nuestras mascotas como lo hacen acá. La recomendamos 100%
                      y será por siempre nuestra veterinaria de confianza 👏👏
                    </p>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slider-slider">
                <div className="item-opiniones">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={ana} alt="" />
                    <h6>Ana Hernandez</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      Me encanto la Clinica, a mi perrito Bruno le hicieron una
                      cirugía y un control médico, muy buen servicio. El Dr.
                      Nicolas es un excelente profesional y se ve que ama lo que
                      hace!! Súper recomendado. 👏
                    </p>
                  </a>
                </div>
                <div className="item-opiniones item-comodin">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={viki} alt="" />
                    <h6>Victoria Reyes</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      El doctor Nicolás es excelente profesional, nuestro gatito
                      tuvo una cirugía y todo salió perfecto, gracias!
                      Recomendadísimo 😺
                    </p>
                  </a>
                </div>
                <div className="item-opiniones item-comodin">
                  <a href="https://www.google.com/search?sca_esv=570803870&hl=es&rlz=1CDGOYI_enCO1029CO1029&cs=0&output=search&q=Veterinaria+Fervet&ludocid=11004038495688742032&lsig=AB86z5WZZpYMNvJFC7c8wbSifpxj&kgs=f478ed2230deaca6&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3#lrd=0x21b6b4f49434bc83:0x98b632b5be405490,1,,,,">
                    <img src={judhit} alt="" />
                    <h6>Andry Julieth Montealegre Serrano</h6>
                    <span>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </span>
                    <p>
                      Muy buen servicio y trato con nuestro amigos de 4 patas ❤️
                    </p>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="slider-movil">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              speed={1500}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper "
            >
              <SwiperSlide className="slider-slider">
                <div className="item-opiniones">
                  <img src={Opinion1} alt="" />
                  <h6>Alexandra Torres</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    Es un lugar que tiene todo lo que un propietario necesita
                    para llevar a su mascota y ponerlo en manos del Doctor con
                    total tranquilidad, tienen experiencia y lo más importante
                    para nosotros como dueños, aman su trabajo y amor genuino
                    por los animales, prestan un excelente servicio, los
                    recomiendo al 100%
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slider-slider">
                <div className="item-opiniones">
                  <img src={Opinion4} alt="" />
                  <h6>Claudia Rincón</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    Excelente servicio recomiendo al 100% la atención al cliente
                    de increíble calidad
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slider-slider">
                <div className="item-opiniones">
                  <img src={monica} alt="" />
                  <h6>Monica Triana</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    Muy recomendado! Había llevado a mi perrita a diferentes
                    sitios y no habían logrado diagnosticarla de manera
                    correcta, siempre me enviaban a hacerle baños medicados,
                    darle la pastilla de la pulga, desparasitar, etc. En FERVET
                    el veterinario Nicolás fue muy preciso con lo que tenía mi
                    perrita y sobre el tratamiento que debía seguir con ella.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slider-slider">
                <div className="item-opiniones">
                  <img src={ana} alt="" />
                  <h6>Ana Hernandez</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    Me encanto la Clinica, a mi perrito Bruno le hicieron una
                    cirugía y un control médico, muy buen servicio. El Dr.
                    Nicolas es un excelente profesional y se ve que ama lo que
                    hace!! Súper recomendado. 👏
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide className="slider-slider">
                <div className="item-opiniones slider-movil">
                  <img src={viki} alt="" />
                  <h6>Victoria Reyes</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    El doctor Nicolás es excelente profesional, nuestro gatito
                    tuvo una cirugía y todo salió perfecto, gracias!
                    Recomendadísimo 😺
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slider">
                <div className="item-opiniones slider-movil ">
                  <img src={judhit} alt="" />
                  <h6>Andry Julieth Montealegre Serrano</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    Muy buen servicio y trato con nuestro amigos de 4 patas ❤️
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slider">
                <div className="item-opiniones slider-movil ">
                  <img src={Opinion2} alt="" />
                  <h6>Diego Leal</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    La mejor veterinaria a la que he ido, lo más importante para
                    resaltar es que son personas muy humanas las que trabajan
                    allá y se enfocan más en la salud del añinas que en el
                    negocio, súper recomendada.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slider">
                <div className="item-opiniones slider-movil ">
                  <img src={Opinion3} alt="" />
                  <h6>La Gran Colombia Empresa de Servicios Integrales</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    Muy buena atención, personal muy profesional y las
                    instalaciones son muy completasles, prestan un excelente
                    servicio, los recomiendo al 100%
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slider">
                <div className="item-opiniones slider-movil ">
                  <img src={erica} alt="" />
                  <h6>Erica Delgado</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    Felicitaciones a los Cirujanos y equipo de trabajo y mis más
                    sinceros agradecimientos con el excelente y oportuno
                    diagnóstico y realización de su cirugía maxilar a mi Gatica
                    Tiky Mendez 😽💖
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slider">
                <div className="item-opiniones slider-movil">
                  <img src={robinson} alt="" />
                  <h6>Robinson hurtado garcia</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    Muy recomendado. La mejor clínica veterinaria en Castilla.
                    El dr. Nicolás además de ser un gran profesional es muy
                    comprometido con sus pacientes y se nota el amor que tiene
                    por su trabajo. Nuestra gata se encuentra muy bien gracias a
                    él y a su equipo de trabajo.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slider">
                <div className="item-opiniones slider-movil">
                  <img src={johana} alt="" />
                  <h6>johanna forero</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    Quisiera agrader mucho al Dr Nicolás por si profesionalismo
                    y carisma hacia si profesión y también a su auxiliar Tania
                    por la amabilidad .siempre desde hace dos años llevamos
                    nuestras mascotas a la clínica así nos quede lejos de
                    nuestro domicilio. Porque estamos seguros de que el hace por
                    nuestros amigos de 4 patas lo que el haría por sus amigos de
                    compañía ....estoy inmensamente agradecida. Con ellos ...los
                    súper recomiendo muy buena atención y entrega .a sus
                    pacientes .gracias
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider-slider">
                <div className="item-opiniones slider-movil">
                  <img src={patricia} alt="" />
                  <h6>Patricia Galvis</h6>
                  <span>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <p>
                    Quiero agradecer al doctor Nicolás por el magnífico
                    profesional que es, desde el primer momento nos dimos cuenta
                    del amor que le tiene a los perritos y de su
                    profesionalismo, mi perrita tuvo una cirugía compleja pero
                    gracias a el salió muy bien, de verdad que es un gusto poder
                    encontrar una veterinaria donde se preocupen por nuestras
                    mascotas como lo hacen acá. La recomendamos 100% y será por
                    siempre nuestra veterinaria de confianza 👏👏
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Opinones;
