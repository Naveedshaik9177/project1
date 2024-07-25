import React from 'react';
import './nav.css';
import img1 from '../assets/S.jpg';
import img2 from '../assets/profile.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={img1} alt="Company Logo" className="logo" />
      </div>
      <div className="profile">
        <img src={img2} alt="Profile" className="profile-pic" />
        <h2>Profile</h2>
      </div>
    </nav>
  );
}

export default NavBar;
