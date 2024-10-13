import React from 'react';

const ProfileList = ({ profiles, onSummaryClick, onDetailsClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6 p-4 ml-20 mt-10">
      {profiles.map(profile => (
        <div 
          key={profile.id} 
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 w-[300px] h-[350px]"
        >
          <img 
            src={profile.photo} 
            alt={profile.name} 
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
          <div className="mt-2">
            <h2 className="text-lg text-black font-bold">{profile.name}</h2>
            <p className="text-black text-sm">{profile.description}</p>
          </div>
          <div className="mt-4 flex justify-between">
            <button 
              className="bg-black text-white rounded-full px-2 py-1" 
              onClick={() => onSummaryClick(profile)}
            >
              Summary
            </button>
            {/* <button 
              className="bg-green-500 text-white rounded px-2 py-1" 
              onClick={() => onDetailsClick(profile)}
            >
              Details
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;


