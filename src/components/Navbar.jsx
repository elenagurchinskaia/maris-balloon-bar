import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const currentPage = useLocation().pathname;

  // function to handle tab click and set the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // define styles for the active tab and inactive links
  const linkStyle = {
    color: "black",
  };
  const activeLinkStyle = {
    color: "grey", // text color when the tab is active
  };

  return (
    <ul classNmae="nav">
      <li className="nav-item">
        <Link
          to="/"
          className={`nav-link ${currentPage === "/" ? "active" : ""}`}
          style={activeTab === "home" ? activeLinkStyle : linkStyle}
          onClick={() => handleTabClick("home")}
        >
          <span>Home</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/about"
          className={`nav-link ${currentPage === "/about" ? "active" : ""}`}
          style={activeTab === "about" ? activeLinkStyle : linkStyle}
          onClick={() => handleTabClick("about")}
        >
          <span>About</span>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
