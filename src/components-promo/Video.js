import React from "react";
import ReactPlayer from "react-player";
import "../styles/video.css";

function Video() {
  return (
    <div className="container-video">
      <div className="item-video">
        <h2>
          Nuestro compromiso es ofrecerte calidad y calidez en todo lo que
          hacemos, por ello cada vez más gente nos confía sus mascotas.
        </h2>
        <a
          href="https://wa.me/573228323376"
          target="_blank"
          className="contact-hero"
        >
          Contacto
        </a>
      </div>
      <div className="item-video">
        <div
          className="video"
          style={{ width: "100%", height: "100%", position: "absolute" }}
        >
          <ReactPlayer
            url="https://youtu.be/fJ5BMoDyaP0"
            width="100%"
            height="100%"
            controls
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
}

export default Video;
