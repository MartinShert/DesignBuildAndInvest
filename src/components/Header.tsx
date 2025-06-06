import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <div className="gradient-bar left"></div>

        <img src="https://i.imgur.com/yQrPr6C.png" alt="Logo" />

        <div className="gradient-bar right"></div>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/referral">Referrals</Link> {/* ✅ Points to /referral */}
      </nav>
    </header>
  );
};

export default Header;
