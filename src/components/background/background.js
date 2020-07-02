import "./background.css";
import "../../../node_modules/particlesjs/dist/particles.min.js";
import Particles from "../../../node_modules/particlesjs/src/particles";
import LandingText from "../../../src/components/landingText/LandingText";
import React from "react";

const background = () => {
  window.onload = function () {
    Particles.init({
      selector: ".background",
      connectParticles: "false",
      color: "#89cff0",
    });
  };

  return (
    <canvas class="background">
      <div className="container">
        <LandingText />
      </div>
    </canvas>
  );
};

export default background;
