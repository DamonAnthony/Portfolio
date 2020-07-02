import React, { useEffect } from "react";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.css";
import M from "../node_modules/materialize-css/dist/js/materialize.min";
import Background from "./components/background/background";
import NavBar from "./components/navbar/NavBar";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div className="App">
      <Background />
      <NavBar />
    </div>
  );
}

export default App;
