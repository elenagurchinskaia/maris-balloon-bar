import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="featured-image">
        <img src="/assets/gallery/home.png" alt="Featured Balloon Design" />
        <div className="text-overlay">
          <h1>WELCOME TO MARI'S BALLOON BAR</h1>
          <p>
            Explore our unique balloon designs and book us for your next event!
          </p>
          <p>Discover the joy of adding a bit more pop to your celebrations!</p>
          <button className="contact-button">CONTACT</button>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/Marisballoonbar?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/marisballoonbar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <button className="scroll-button">SCROLL</button>
        </div>
      </div>
      <Navbar />
      <Gallery />
    </div>
  );
}

export default Home;
