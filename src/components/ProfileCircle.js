import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/profileCircle.css';
import profilePicture from '../images/profile.png'; // Import the profile picture

const ProfileCircle = ({ isLoggedIn }) => {
  return (
    <Link to={isLoggedIn ? '/profile' : '/login'} className="profile-circle">
      {isLoggedIn ? (
        <img src={profilePicture} alt="Profile" className="profile-picture" />
      ) : (
        <i className="fas fa-sign-in-alt"></i>
      )}
    </Link>
  );
};

export default ProfileCircle;