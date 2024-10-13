import React from 'react';

const Home = ({ setView, toggleTheme, isDarkMode }) => {
  return (
    <div className="home h-screen flex items-center justify-between">
    <div className="buttons items-center justify-center space-x-[100px] space-y-6 w-[70%] h-full">
        <div className='text-9xl'>
            <h1 className='mt-[300px] mb-[100px] px-[100px] font-extrabold'>GEO-PROFILE</h1>
        </div>
      <button 
        className="bg-white text-black px-10 py-2  mt-[700px] text-2xl ml-[3000px] rounded-full h-[80px] w-[200px] hover:bg-gray-200"
        onClick={() => setView('profileList')}
      >
        Profiles
      </button>
      <button 
        className="relatiive bg-green-500 h-[80px] text-2xl  text-black w-[200px] px-4 py-2 rounded-full hover:bg-green-600"
        onClick={() => setView('adminPanel')}
      >
        Admin Panel
      </button>
      {/* <button 
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
        onClick={toggleTheme}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button> */}
    </div>
    <div className='home-img h-full w-[40%]'>
        <img className='mt-[100px] h-[800px] w-[800px]' src="/src/assets/home.png" alt="" />
    </div>
    </div>
  );
};

export default Home;
