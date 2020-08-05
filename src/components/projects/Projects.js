import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 id="projects" className="projects-heading">
        Projects
      </h1>
      <div className="cards">
        <div id="card1" className="card medium card1">
          <div className="card-image">
            <img src={require("./BaconBits.jpeg")} alt="Final Project" />
          </div>
          <div className="card-content">
            <h5>Bacon'sBits</h5>
            <p>My video game e-commerce site</p>
          </div>
          <div className="card-action">
            <a
              className="white-text project-link"
              href="https://polar-badlands-63420.herokuapp.com/"
            >
              View project
            </a>
          </div>
        </div>
        <div id="card2" className="card medium card2">
          <div className="card-image">
            <img src={require("./ContactKeeper.png")} alt="ContactKeeper" />
          </div>
          <div className="card-content">
            <h5>Contact Keeper</h5>
            <p>A project that keeps track of contacts for users</p>
          </div>
          <div className="card-action">
            <a
              className="white-text project-link"
              href="https://damonanthony.github.io/ContactKeeper/"
            >
              View project
            </a>
          </div>
        </div>
        <div id="card3" className="card medium card3">
          <div className="card-image">
            <img src={require("./IT-Logger.png")} alt="IT-Logger" />
          </div>
          <div className="card-content">
            <div className="card-title">IT-Logger</div>
            <p>A project that help IT technicians log problems </p>
          </div>
          <div className="card-action ">
            <a
              href="https://damonanthony.github.io/IT-Logger/"
              className="white-text project-link"
            >
              View project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
