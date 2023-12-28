// src/components/Header.jsx
import React from 'react';

const Header = ({ toggleGridMode }) => {
  return (
    <header className="bg-white p-4 flex items-center justify-between">
      <h1 className="text-black text-2xl font-bold">Hugo Kahrs</h1>
      <button
        className="lg:hidden p-2 focus:outline-none"
        onClick={toggleGridMode}
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
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
