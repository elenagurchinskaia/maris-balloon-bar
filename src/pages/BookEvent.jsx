import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/BookEvent.css";

function BookEvent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Your event has been booked for ${selectedDate.toDateString()}. We will contact you to confirm the details.`
    );
    // Here you would typically handle the booking logic, e.g., saving the date in a database
  };

  return (
    <div className="book-event">
      <h1>Book Your Event</h1>
      <form onSubmit={handleSubmit}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          dateFormat="MMMM d, yyyy"
          inline
        />
        <button type="submit">Book Event</button>
      </form>
    </div>
  );
}

export default BookEvent;
