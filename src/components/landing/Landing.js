import "./Landing.css";
import "particlesjs";
import Particles from "particlesjs/src/particles";
import React from "react";

const landing = () => {
  window.onload = function () {
    Particles.init({
      selector: ".background",
      connectParticles: "false",
      color: "#89cff0",
    });
  };

  return (
    <div className="landing-container">
      <canvas class="background">
        <div className="landing-text">
          <p>Doot Doot Doot</p>
        </div>
      </canvas>
    </div>
  );
};

export default landing;
