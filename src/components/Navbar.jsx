import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, title: "Home", link: "/home" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Accommodation", link: "/accommodation" },
    { id: 4, title: "Restaurants", link: "/restaurants" },
    { id: 5, title: "Events", link: "/events" },
    { id: 6, title: "Testimonials", link: "/testimonials" },
    { id: 7, title: "Nearby", link: "/nearby" },
    { id: 8, title: "Recreation", link: "/recreation" },
    { id: 9, title: "Gallery", link: "/gallery" },
    { id: 10, title: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <header className="flex items-center justify-between px-12 py-4 z-50 fixed w-full top-0 text-white bg-gradient-to-b from-black/50 to-black/0">
          <button>
            <FaWhatsapp className="text-2xl" />
          </button>
          <h1 className="text-2xl">Logo</h1>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
          </button>
        </header>

        <div
          className={`fixed top-0 right-0 pt-10 w-64 h-full bg-gray-800 transition-all duration-200 ease-linear z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
