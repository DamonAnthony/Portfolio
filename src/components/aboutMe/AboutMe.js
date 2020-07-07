import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1 id="aboutMe" className="about-me-heading">
        <strong>About me</strong>
      </h1>
      <p className="about-me-p">
        I am a Web Developer who would like to focus on Backend Development. I
        am a respectful, hardworking and disciplined individual who loves
        learning new things especially related to technology. I have a passion
        for coding and working with technology. I like sharing my knowledge with
        others.
      </p>
      <div className=".container border border-light details-container">
        <div className="row">
          <div className="col s4 detail">
            <strong>Date of birth: </strong>12 May 2001
          </div>
          <div className="col s4 detail">
            <strong>Age: </strong>19
          </div>
          <div className="col s4 detail">
            <strong>City: </strong>Cape Town
          </div>
        </div>
        <div className="row">
          <div className="col s4 detail">
            <strong>Email: </strong>damonanthony125@gmail.com
          </div>
          <div className="col s4 detail">
            <strong>Phone: </strong>+27 81 525 8193
          </div>
          <div className="col s4 detail">
            <strong>Github Username: </strong>DamonAnthony
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
