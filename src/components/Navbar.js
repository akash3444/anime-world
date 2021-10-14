import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    if (isOpen && e.target === ref.current) {
      setIsOpen(false);
    }
  };
  return (
    <nav className="relative h-16 w-full bg-blue-600 text-white px-6">
      <div className="max-w-screen-lg h-full mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold whitespace-nowrap">
          Anime World
        </Link>
        <div className="flex items-center space-x-3 block md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <CgMenu size={25} />
          </button>
          <Link to="/search">
            <FiSearch size={25} />
          </Link>
        </div>
        <div
          ref={ref}
          onClick={handleClick}
          className={`absolute md:static inset-0 w-full h-screen md:h-16 bg-black md:bg-blue-600 bg-opacity-60 md:bg-opacity-100 z-20 md:z-0 ${
            isOpen
              ? "translate-x-0 md:translate-x-0"
              : "-translate-x-full md:translate-x-0"
          } transform transition-transform duration-300`}
        >
          <div
            className={`relative md:static text-gray-900 w-80 md:w-full h-screen md:h-16 md:min-h-16 bg-white md:bg-blue-600 shadow-md md:shadow-none py-14 md:py-0 px-6 transform${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }  md:translate-x-0`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute md:hidden text-5xl font-light text-gray-700 top-1 right-3"
            >
              &times;
            </button>
            <h2 className="block md:hidden text-gray-900 font-bold text-3xl tracking-wide">
              Anime World
            </h2>
            <div className="flex flex-col md:flex-row md:justify-end md:items-center md:text-white md:h-full mt-5 md:mt-0 space-y-2 md:space-y-0 md:space-x-3">
              <Link
                to="/"
                className="bg-gray-200 md:max-w-max md:bg-blue-500 w-full py-3 md:py-1.5 px-3 rounded-lg"
              >
                Home
              </Link>
              <Link
                to="/"
                className="hover:bg-gray-200 md:max-w-max md:hover:bg-blue-500 w-full py-3 md:py-1.5 px-3 rounded-lg"
              >
                Anime
              </Link>
              <Link
                to="/"
                className="hover:bg-gray-200 md:max-w-max md:hover:bg-blue-500 w-full py-3 md:py-1.5 px-3 rounded-lg"
              >
                Manga
              </Link>
              <Link to="/search" className="hidden md:block">
                <FiSearch size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
