import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
