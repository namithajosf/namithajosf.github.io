import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
