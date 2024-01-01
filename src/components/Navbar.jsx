import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const goToInstagramPage = (event) => {
    event.preventDefault();
    const instagramUrl = 'https://www.instagram.com/hugokhrs/';
    window.open(instagramUrl, '_blank');
  };

  return (
    <div className="relative bg-gray-800 p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between w-full">
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={openDrawer}
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
        <div className="hidden lg:flex items-center space-x-4 justify-center flex-1">
          {/* Your navigation links here */}
          <Link to="/" className="text-white text-2xl">
            Hugo Kahrs
          </Link>
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

      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 bg-black opacity-50" onClick={closeDrawer}></div>
      )}

      <div
        className={`lg:hidden fixed inset-y-0 left-0 max-w-xs w-full bg-gray-800 transform transition-transform ease-in-out duration-300 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-2xl font-bold">Hugo Kahrs</h2>
            <button className="text-white" onClick={closeDrawer}>
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
          <ul className="pl-0">
            {/* Your drawer menu items here */}
            <li className="text-white text-left mb-2">
              <Link to="/" onClick={closeDrawer}>
                <div className="hover:bg-gray-700 p-2 rounded">Home</div>
              </Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
