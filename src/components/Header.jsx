import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const goToInstagramPage = (event) => {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    const instagramUrl = 'https://www.instagram.com/hugokhrs/';
    window.open(instagramUrl, '_blank');
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Hjem</Link></li>
            <li><a href="/" onClick={goToInstagramPage}>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">Hugo Kahrs</Link>
      </div>
      <div className="navbar-end">
        {/* Removed the search button */}
        <button
          className="btn btn-ghost btn-circle p-2 focus:outline-none" 
          onClick={goToInstagramPage}
        >
          <FaInstagram size={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
