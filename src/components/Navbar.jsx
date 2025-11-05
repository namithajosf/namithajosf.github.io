import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, title: "Home", link: "#" },
    { id: 2, title: "Projects", link: "#projects" },
    { id: 3, title: "Skills", link: "#skills" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-2xl border border-gray-200
        max-w-7xl w-[94%] md:w-[90%]
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-white shadow-md"
        }
      `}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="text-(--color-dark) hover:text-(--color-green) transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="bg-(--color-green) text-(--color-light) px-6 py-2 rounded-full hover:bg-[#395437] transition-colors font-medium"
                >
                  Get in Touch
                </a>
              </li>
            </ul>

            {/* Mobile Button */}
            <button
              onClick={handleNav}
              className="md:hidden p-2 text-(--color-dark) hover:text-(--color-green) transition-colors"
            >
              {nav ? "" : <AiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          nav ? "visible opacity-95" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            nav ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleNav}
        />

        {/* Sliding Menu */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out rounded-l-2xl z-50
          ${nav ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex flex-col h-full p-8 pt-20">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li
                  key={item.id}
                  className={`transform transition-all duration-300 ${
                    nav
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: nav ? `${index * 50 + 100}ms` : "0ms",
                  }}
                >
                  <a
                    href={item.link}
                    onClick={handleNav}
                    className="text-2xl font-medium text-(--color-dark) hover:text-(--color-green) transition-colors block"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className={`mt-12 transform transition-all duration-300 ${
                nav ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: nav ? "250ms" : "0ms" }}
            >
              <a
                href="#contact"
                onClick={handleNav}
                className="block text-center bg-(--color-green) text-(--color-light) px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#395437] transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
