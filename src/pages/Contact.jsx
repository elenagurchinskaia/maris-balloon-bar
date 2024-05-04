import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    source: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted, we will contact you shortly!");
    // handle the form submission here, e.g., sending data to a server
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      source: "",
      eventDate: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p>
          Please, fill out the form below to start planning your event decor.
          Our design team is ready to create eye-catching balloon decorations
          for you. Do you have questions? Send us an email to email@email.com or
          call us at 512-000-0000
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name (if applicable)"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="source"
            placeholder="How did you hear about us?"
            value={formData.source}
            onChange={handleChange}
          />
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
