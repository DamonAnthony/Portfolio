import React, { useEffect } from "react";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.css";
import M from "../node_modules/materialize-css/dist/js/materialize.min";
import Background from "./components/background/Background";
import Landing from "./components/landing/Landing";
import NavBar from "./components/navbar/NavBar";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import ContactMe from "./components/contactMe/ContactMe";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <Landing />
      <Background />
      <NavBar />
      <AboutMe />
      <Projects />
      <Testimonials />
      <ContactMe />
    </div>
  );
}

export default App;
