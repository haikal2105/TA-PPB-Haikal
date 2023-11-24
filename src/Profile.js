// Profile.js
import React from 'react';
import './Profile.css'; // Import your CSS file for styling

const Profile = () => {
  // You can replace these with actual data
  const developerName = 'Muhammad Haikal Afinas Sidiq';
  const developerId = '21120121120014';
  const developerImage = 'Developer.png';

  return (
    <div className="profile-container">
      <img className="profile-image" src={developerImage} alt="Developer" />
      <h2>{developerName}</h2>
      <p>ID: {developerId}</p>
      {/* Add more information about the developer as needed */}
    </div>
  );
};

export default Profile;
