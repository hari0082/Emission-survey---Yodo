import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Layout() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenuOnDesktop = () => {
    if (window.innerWidth > 640) {
      setMenuOpen(false);
    }
  };

  const handleClickOutsideMenu = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <div>
      <header className="relative flex justify-between p-8 font-bold text-white">
        <h1>Website Carbon calculator</h1>
        <div className="lg:hidden" ref={menuButtonRef}>
          <button onClick={toggleMenu} className="text-3xl">
            ☰
          </button>
        </div>
        {window.innerWidth <= 640 ? (
          <nav
            ref={menuRef}
            className={`${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden list-none cursor-pointer fixed top-0 right-0 h-full w-1/3 bg-gray-700 z-10 transform transition-transform ease-in-out duration-300 text-right p-4`}
          >
            <li className="mb-4">
              <Link
                to="/"
                className="hover:text-green-500"
                onClick={() => {
                  closeMenuOnDesktop();
                  setMenuOpen(false);
                }}
              >
                How it works?
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/"
                className="hover:text-green-500"
                onClick={() => {
                  closeMenuOnDesktop();
                  setMenuOpen(false);
                }}
              >
                Become a partner
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/about"
                className="hover:text-green-500"
                onClick={() => {
                  closeMenuOnDesktop();
                  setMenuOpen(false);
                }}
              >
                About
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/contact"
                className="hover:text-green-500"
                onClick={() => {
                  closeMenuOnDesktop();
                  setMenuOpen(false);
                }}
              >
                Contact us
              </Link>
            </li>
            <button className="mt-10" onClick={toggleMenu}>
              ✕ Close
            </button>
          </nav>
        ) : (
          <nav className="list-none lg:flex lg:gap-8">
            <li>
              <Link to="/" className="hover:text-green-500">
                How it works?
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-500">
                Become a partner
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-500">
                Contact us
              </Link>
            </li>
          </nav>
        )}
      </header>
      {isMenuOpen && (
        <div
          className="fixed top-0 right-0 z-0 w-full h-full transition-opacity duration-300 ease-in-out bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}

export default Layout;
