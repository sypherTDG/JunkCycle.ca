import React from "react";
import "./Header.css";
import logo from "../../assets/JunkCycle-Logo1.svg"; // Adjust path if needed
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img src={logo} alt="JunkCycle Logo" className="header-logo" />
      </a>
      <div className="social-icons">
        <a href="https://www.instagram.com/hellojunkcycle/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/junk-cycle-31ba82362" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/HelloJunkCycle" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </header>
  );
};

export default Header;