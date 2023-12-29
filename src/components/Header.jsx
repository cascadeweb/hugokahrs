import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Header = ({ toggleGridMode }) => {
  const goToInstagramPage = () => {
    const instagramUrl = 'https://www.instagram.com/hugokhrs/';
    window.open(instagramUrl, '_blank');
  };

  return (
    <header className="bg-white p-4 flex items-center justify-between">
      <h1 className="text-black text-2xl font-bold">Hugo Kahrs</h1>
      <button
        className="p-2 focus:outline-none" // Removed lg:hidden class
        onClick={goToInstagramPage}
      >
        <FaInstagram size={24} />
      </button>
    </header>
  );
};

export default Header;
