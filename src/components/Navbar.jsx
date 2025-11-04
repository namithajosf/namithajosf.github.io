import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../index.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  const navItems = [
    { id: 1, title: "Home", link: "#" },
    { id: 2, title: "Projects", link: "#projects" },
    { id: 3, title: "Skills", link: "#skills" },
    { id: 4, title: "Internships", link: "#internships" },
  ];

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${
        shadow ? "shadow-lg" : ""
      } bg-white rounded-full w-full max-w-7xl px-10 py-4 transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <ul className="hidden md:flex space-x-6 text-(--color-dark) font-medium">
          {navItems.map((item) => (
            <li key={item.id} className="hover:text-(--color-green) transition">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>

        {/* Right Side Button */}
        <a
          href="#contact"
          className="hidden md:block bg-(--color-green) text-(--color-light) px-5 py-2 rounded-full hover:bg-[#395437] transition"
        >
          Get in Touch
        </a>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed md:hidden left-0 top-0 w-[70%] h-full bg-white border-r border-gray-200 p-6 transition-all duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b border-gray-200 hover:bg-gray-100 rounded-md transition"
            onClick={() => setNav(false)}
          >
            <a href={item.link}>{item.title}</a>
          </li>
        ))}

        <li className="mt-6">
          <a
            href="#contact"
            className="block text-center bg-(--color-green) text-(--color-dark) py-2 rounded-md hover:bg-[#395437] transition"
            onClick={() => setNav(false)}
          >
            Get in Touch
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
