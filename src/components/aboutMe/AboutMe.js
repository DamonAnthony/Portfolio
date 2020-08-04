import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1 id="aboutMe" className="about-me-heading">
        <strong>About me</strong>
      </h1>
      <p className="about-me-p">
        I am a respectful, hardworking and disciplined individual who loves
        learning new things especially related to technology. I have a passion
        for coding and working with technology. I am patient and like helping
        others and sharing my knowledge with others.I have been exposed to
        computers since I was 3 years old as my dad used to fix them. As I grew
        up I would help him fix the computers. I always wanted to learn more
        about how computers worked and read a lot about them. I did IT in high
        school where I was introduced to coding and since then I knew that this
        is what I wanted to do.
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
        <div className="row">
          <div className="col s12 detail">
            <strong>Languages: </strong>English and Afrikaans
          </div>
        </div>
      </div>
      <div className="hobbies-container">
        <h2 className="hobbies-heading">Hobbies:</h2>
        <div className="row">
          <div className="col s4">
            <i className="medium material-icons">sports_esports</i>
            <p>Playing Videogames</p>
          </div>
          <div className="col s4">
            <i className="medium material-icons">local_library</i>
            <p> Reading</p>
          </div>
          <div className="col s4">
            <i className="medium material-icons">ondemand_video</i>
            <p>Watching series and anime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
