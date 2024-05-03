import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const currentPage = useLocation().pathname;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const linkStyle = {
    color: "black",
  };
  const activeLinkStyle = {
    color: "grey",
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img
            src="/Users/elena/kotocoding/maris-balloon-bar/src/assets/logo/maris-logo.png"
            alt="Mari's Balloon Bar Logo"
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li className={`nav-item ${currentPage === "/about" ? "active" : ""}`}>
          <Link
            to="/about"
            style={activeTab === "about" ? activeLinkStyle : linkStyle}
            onClick={() => handleTabClick("about")}
          >
            about
          </Link>
        </li>
        <li
          className={`nav-item ${currentPage === "/gallery" ? "active" : ""}`}
        >
          <Link
            to="/gallery"
            style={activeTab === "gallery" ? activeLinkStyle : linkStyle}
            onClick={() => handleTabClick("gallery")}
          >
            gallery
          </Link>
        </li>
        <li
          className={`nav-item ${
            currentPage === "/seasonal-items" ? "active" : ""
          }`}
        >
          <Link
            to="/seasonal-items"
            style={activeTab === "seasonal-items" ? activeLinkStyle : linkStyle}
            onClick={() => handleTabClick("seasonal-items")}
          >
            seasonal items
          </Link>
        </li>
        <li
          className={`nav-item ${
            currentPage === "/rental-catalog" ? "active" : ""
          }`}
        >
          <Link
            to="/rental-catalog"
            style={activeTab === "rental-catalog" ? activeLinkStyle : linkStyle}
            onClick={() => handleTabClick("rental-catalog")}
          >
            rental catalog
          </Link>
        </li>
        <li
          className={`nav-item ${currentPage === "/contact" ? "active" : ""}`}
        >
          <Link
            to="/contact"
            style={activeTab === "contact" ? activeLinkStyle : linkStyle}
            onClick={() => handleTabClick("contact")}
          >
            contact
          </Link>
        </li>
        <li
          className={`nav-item ${
            currentPage === "/book-event" ? "active" : ""
          }`}
        >
          <Link
            to="/book-event"
            style={activeTab === "book-event" ? activeLinkStyle : linkStyle}
            onClick={() => handleTabClick("book-event")}
          >
            book event
          </Link>
        </li>
      </ul>
      <div className="social-media-icons">
        <Link to="//facebook.com" target="_blank">
          <FaFacebook />
        </Link>
        <Link to="//instagram.com" target="_blank">
          <FaInstagram />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
