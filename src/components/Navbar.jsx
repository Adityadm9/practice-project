import React, { useState } from "react";
import TheFirm from "/images/home/TheFirm.jpg";
import Home from "/images/home/Home.png";
const navItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "Solutions" },
  { href: "#", label: "Cases" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact Us" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <img className="w-52 h-8 hover:scale-110 cursor-pointer" src={TheFirm} alt="No Image" />
        </div>

        <ul className="hidden lg:flex font-nunito font-bold text-gray-900  lg:gap-6 xl:gap-10 items-center text-lg cursor-pointer  ">
          {navItems.map((item) => (
            <li
              key={item.label}
              href={item.href}
              className="hover:underline hover:decoration-yellow-500 hover:decoration-4 hover:scale-110"
            >
              {item.label}
            </li>
          ))}
          <li className="bg-yellow-400 px-2 py-2 rounded-md text-white hover:scale-110">
            <button>Get In Touch</button>
          </li>
        </ul>

        <div className="lg:hidden flex items-center">
          <button
            className="text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg :hidden mt-4 ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="space-y-4 font-nunito font-bold text-gray-900 text-lg">
          {navItems.map((item) => (
            <li
              key={item.label}
              href={item.href}
              className="hover:text-yellow-500"
            >
              {item.label}
            </li>
          ))}

          <li className="bg-yellow-400 px-4 py-2 rounded-md text-white ">
            <button>Get In Touch</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
