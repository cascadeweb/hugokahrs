import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToInstagramPage = (event) => {
    event.preventDefault();
    const instagramUrl = 'https://www.instagram.com/hugokhrs/';
    window.open(instagramUrl, '_blank');
  };

  const menuCategories = ['Se Kunst'];

  return (
    <div className="navbar bg-gray-800 p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between w-full">
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl ml-2">
            Hugo Kahrs
          </Link>
          {!menuOpen && (
            <div className="hidden lg:flex items-center space-x-4 justify-center flex-1">
              {menuCategories.map((category, index) => (
                <Link
                  key={index}
                  to={category === 'Hjem' ? '/' : `/${category.toLowerCase()}`}
                  className="text-white"
                  style={{ marginLeft: '15px' }}
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="ml-auto">
          <button
            className="text-white focus:outline-none"
            onClick={goToInstagramPage}
          >
            <FaInstagram size={24} />
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-4/5 bg-gray-800 transform transition-transform ease-in-out duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-2xl font-bold">Hugo Kahrs</h2>
            <button
              className="text-white focus:outline-none"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <hr className="border-t border-gray-700 mb-4" />
          <ul className="pl-0 flex-1 overflow-y-auto">
            {menuCategories.map((category, index) => (
              <React.Fragment key={index}>
                <li className="text-white text-left mb-2">
                  <Link
                    to={category === 'Hjem' ? '/' : `/${category.toLowerCase()}`}
                    onClick={closeMenu}
                  >
                    <div className="hover:bg-gray-700 p-2 rounded">{category}</div>
                  </Link>
                </li>
                {index < menuCategories.length - 1 && (
                  <hr className="border-t border-gray-700 mb-2" />
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
