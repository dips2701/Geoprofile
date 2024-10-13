import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [formData, setFormData] = useState({ name: '', description: '', location: '', photo: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photo: reader.result }));
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


const handleSubmit = () => {
    if (!formData.name || !formData.description || !formData.location || !formData.photo) {
      alert("Please fill in all fields before submitting.");
      return; 
    }
  
    if (isEditing) {
      const updatedProfiles = [...profiles];
      updatedProfiles[editIndex] = formData;
      setProfiles(updatedProfiles);
      setIsEditing(false);
    } else {
      setProfiles([...profiles, formData]);
    }
  
    setFormData({ name: '', description: '', location: '', photo: '' });
    setPreviewImage(null);
  };
  

  const handleEdit = (index) => {
    setFormData(profiles[index]);
    setPreviewImage(profiles[index].photo);
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleDelete = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="flex grid-cols-1 lg:grid-cols-2 gap-10 p-4 rounded-lg shadow-md">
      
      <div className='ml-10 w-[50%]'>
        <h2 className="text-4xl font-bold ml-16 mb-8">{isEditing ? 'Edit Profile' : 'Add New Profile'}</h2>
        <div className="grid gap-10 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="px-6 py-2 border bg-zinc-900 text-xl border-gray-300 rounded-full w-[65%] h-[100%] mb-6 ml-14"
          />
          <input
            type="text"
            required
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleInputChange}
            className="px-6 py-2 bg-zinc-900 border text-xl border-gray-300 rounded-full w-[65%] h-[100%] mb-6 ml-14"
          />
          <input
            type="file"
            required
            accept="image/*"
            onChange={handleImageUpload}
            className="px-6 py-4 border bg-zinc-900 text-xl border-gray-300 rounded-full w-[65%] h-[100%] mb-6 ml-14"
          />
          {previewImage && (
            <img 
              src={previewImage} 
              alt="Preview" 
              className="w-32 h-32 object-cover rounded ml-12"
            />
          )}
          <textarea
            name="description"
            required
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="px-6 py-2 border bg-zinc-900 text-xl border-gray-300 rounded-full w-[65%] h-[100%] mb-6 ml-14"
          />
        </div>
        <button
          className="bg-white text-black text-xl px-4 py-2 h-[12%] w-[20%] rounded-full mt-9 ml-14"
          onClick={handleSubmit}
        >
          {isEditing ? 'Update Profile' : 'Add Profile'}
        </button>
      </div>
      <div className='border-r border-gray-500'></div>

      <div className='w-[50%] ml-20'>
        <h3 className="text-4xl font-bold ml-4 mb-8">Manage Profiles</h3>
        <ul className="space-y-4">
          {profiles.map((profile, index) => (
            <li key={index} className="flex justify-between items-center p-2 border text-black bg-gray-200 rounded-full w-[65%] h-[50%]">
              <div>
                <h4 className="font-bold px-4 text-xl">{profile.name}</h4>
                <p className="text-lg px-4 text-gray-700">{profile.location}</p>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-black text-white px-2 py-1 rounded-full w-20 h-12"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className=" text-gray-500 text-2xl px-4 py-1 rounded"
                  onClick={() => handleDelete(index)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default AdminPanel;


