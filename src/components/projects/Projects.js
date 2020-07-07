import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 id="projects" className="projects-heading">
        Projects
      </h1>
      <div className="row cardrow">
        <div className="col s4">
          <div id="card1" className="card medium card1">
            <div className="card-image">
              <img src="!#" alt="Final Project" />
            </div>
            <div className="card-content">
              <h5>Lorem Ipsum</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="card-action">
              <a className="black-text project-link" href="!#">
                View project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row cardrow">
        <div className="col s4 offset-s8">
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
                className="black-text project-link"
                href="https://damonanthony.github.io/ContactKeeper/"
              >
                View project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row cardrow">
        <div className="col s4">
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
                className="black-text project-link"
              >
                View project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
