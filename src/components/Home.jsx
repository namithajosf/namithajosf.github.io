import React, { useState, useEffect } from "react";
import "../index.css";
import profileImg from "../assets/profile.jpeg";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDiscord,
  FaInstagram,
  FaInstagramSquare,
} from "react-icons/fa";

const Home = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-(--color-light)"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-36 md:gap-56 max-w-7xl w-full">
        {/* Left section */}
        <div className="flex flex-col items-start space-y-6">
          {/* AVAILABLE FOR WORK bar */}
          <div
            className={`${
              shadow ? "shadow-lg" : ""
            } bg-[hsl(25,100%,40%,13%)] rounded-full w-52 px-5 py-3 transition-all duration-300`}
          >
            <span className="text-sm font-medium text-(--color-orange) flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-(--color-orange) rounded-full"></span>
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Text content aligned under the bar */}
          <h1 className="text-5xl md:text-6xl font-medium text-(--color-dark) leading-tight font-roboto-serif">
            Hi, I'm <br className="hidden md:block" /> Namitha Joseph
          </h1>
          <p className="text-(--color-dark) opacity-80 max-w-lg">
            Developer. AI explorer. Problem-solver. <br />
            Engineering real-world impact in the fast lane.
          </p>

          <button className="mt-2 px-6 py-2 rounded-md bg-(--color-green) text-(--color-light) font-medium hover:bg-(--color-dark) transition">
            Download Resume
          </button>
        </div>

        {/* Right section - Image and Icons */}
        <div className="flex flex-col items-center">
          <img
            src={profileImg}
            alt="Namitha Joseph"
            className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
