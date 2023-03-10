import React from "react";
import LogoFooter from "../img/logo-footer.png";
import WhatsFooter from "../img/wats-footer.png";
import PhoneFooter from "../img/phone-footer.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="item-footer">
        <img src={LogoFooter} alt="" />
      </div>
      <div className="item-footer">
        <div className="contact-footer">
          <img src={WhatsFooter} alt="" />
          <img src={PhoneFooter} alt="" />
        </div>
        <div className="contact-footer">
          <h6>6017156662</h6>
          <h6>3228323376</h6>
        </div>
        <div className="contact-footer">
          <p>
            <a href="#" target="_blank">
              Diseñado por agencia Inspiración Ⓒ Fervet <br /> Ⓒ Todos los
              derechos reservados
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
