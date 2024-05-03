import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <h1>ABOUT US</h1>
      <p>
        Welcome to Mari’s Balloon Bar! We specialize in creating unique and
        memorable balloon decorations for all kinds of events.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to bring your event to life with creative and
          eye-catching balloon designs that make every occasion special.
        </p>
      </section>
      <h2>Meet Our Team</h2>
      <section className="team-block">
        <div className="team-member">
          <img src="path/to/image1.jpg" alt="Team member 1" />
          <h3>Team Member 01</h3>
          <p>Title</p>
          <p>Bio</p>
        </div>
        <div className="team-member">
          <img src="path/to/image2.jpg" alt="Team member 2" />
          <h3>Team Member 02</h3>
          <p>Title</p>
          <p>Bio</p>
        </div>
      </section>
    </div>
  );
}

export default About;
