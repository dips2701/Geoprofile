import React, { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';
import Home from './components/Home'; 
import Navbar from './components/Navbar'; 

const App = () => {
  const [profiles, setProfiles] = useState([
    { 
      id: 1, 
      name: 'Dipanshu Wanjari', 
      description: 'A software developer.', 
      photo: '/src/assets/dips.png', 
      location: 'Pune, IN' 
    },
    { 
      id: 2, 
      name: 'Bill Gates', 
      description: 'A software developer.', 
      photo: '/src/assets/2.avif', 
      location: 'Nagpur, IN' 
    },
    { 
      id: 3, 
      name: 'Ratan Tata', 
      description: 'A product manager.', 
      photo: '/src/assets/3.jpg', 
      location: 'Bangalore, IN' 
    },
    { 
      id: 4, 
      name: 'Elon musk', 
      description: 'A product manager.', 
      photo: '/src/assets/4.jpg', 
      location: 'Chennai, IN' 
    },
    { 
      id: 5, 
      name: 'Peter Parkar', 
      description: 'A product manager.', 
      photo: '/src/assets/5.png', 
      location: 'Jaipur, IN' 
    },
    { 
      id: 6, 
      name: 'James Bond', 
      description: 'A product manager.', 
      photo: '/src/assets/6.jpg', 
      location: 'Patna, IN' 
    }
  ]);

  const [selectedProfile, setSelectedProfile] = useState(null);
  const [viewingDetails, setViewingDetails] = useState(false); 
  const [showAdmin, setShowAdmin] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [view, setView] = useState('home'); 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredProfiles = profiles.filter(profile => 
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.description.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  
  useEffect(() => {
    document.body.className = isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black';
  }, [isDarkMode]);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
    setViewingDetails(true);
  };

  const handleDetailsClick = (profile) => {
    setSelectedProfile(profile);
    setViewingDetails(true);
  };

  return (
    <div className="w-full h-screen text-white bg-zinc-900 overflow-hidden">
      <Navbar setView={setView} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <div className="pt-16">
        {view === 'home' && (
          <Home 
            setView={setView} 
            toggleTheme={toggleTheme} 
            isDarkMode={isDarkMode}
          />
        )}

        {view === 'profileList' && (
          <>
            <div className="flex gap-8 mt-10">
              <h1 className="text-4xl mt-20 ml-20 font-bold mb-6">Profile List</h1>
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-4 p-2 border ml-5 bg-zinc-900 border-gray-300 h-[50px] mt-20 rounded-full w-[300px]"
              />
            </div>
            {!viewingDetails ? (
              <ProfileList 
                profiles={filteredProfiles}
                onSummaryClick={handleSummaryClick}
                onDetailsClick={handleDetailsClick}
              />
            ) : (
              <ProfileDetails profile={selectedProfile} /> 
            )}

            {viewingDetails && (
              <button 
                className="bg-white text-black text-xl mt-8 h-[50px] ml-10 rounded-full px-8 py-1"
                onClick={() => setViewingDetails(false)}
              >
                Back
              </button>
            )}
          </>
        )}

        {view === 'adminPanel' && (
          <>
            <h1 className="mt-20 ml-1 text-4xl px-[1100px] font-bold mb-6"></h1>
            <AdminPanel profiles={profiles} setProfiles={setProfiles} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;









