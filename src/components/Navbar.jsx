import React from 'react';

const Navbar = ({ setView, toggleTheme, isDarkMode }) => {
  return (
    <nav className="bg-zinc-900 text-white fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/home.jsx">
        <img src="/src/assets/gp.png" alt="GeoProfile" class="h-24 w-28" />
        </a>
        <div className="flex items-center text-2xl space-x-20">
          <button
            className="hover:text-gray-400 hover:underline"
            onClick={() => setView('home')}
          >
            Home
          </button>
          <button
            className="hover:text-gray-400 hover:underline"
            onClick={() => setView('profileList')}
          >
            Profiles
          </button>
          <button
            className="hover:text-gray-400 hover:underline"
            onClick={() => setView('adminPanel')}
          >
            Admin
          </button>
        </div>
      </div>
      <div className='border border-gray-500 w-[95%] ml-14'></div>
    </nav>
  );
};

export default Navbar;
