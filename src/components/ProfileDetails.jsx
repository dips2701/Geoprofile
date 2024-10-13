import React from 'react';
import MapComponent from './MapComponent';

const ProfileDetails = ({ profile }) => {
  return (
    <div className="p-4 bg-white text-black rounded-lg shadow-md ml-8 mt-10 mr-20 h-auto">
      <div className="flex gap-4">
        <div className="w-1/2 ml-6 mt-4">
          <img 
            src={profile.photo} 
            alt={profile.name} 
            className="w-48 h-48 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4">{profile.name}</h2>
          <p className="text-black">{profile.description}</p>
          <div className="mt-4">
            <h3 className="text-lg text-black font-semibold">Location:</h3>
            <p className="text-black text-xl">{profile.location}</p>
          </div>
          <p className="font-normal mt-2 mb-10 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum similique id soluta sed!
            Adipisci ipsum placeat expedita, beatae, labore asperiores officiis sapiente cumque tempore
            quos vero, eius minus tenetur ex.
          </p>
        </div>

        <div className="w-1/2 mt-[-70px] px-9">
          <MapComponent selectedProfile={profile} />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;


