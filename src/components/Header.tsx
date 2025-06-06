import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <div className="gradient-bar left"></div>

        <img
          src="https://i.imgur.com/yQrPr6C.png"
          alt="Logo"
          className="company-logo"
        />

        <div className="gradient-bar right"></div>
      </div>

      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/referral">Referrals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
