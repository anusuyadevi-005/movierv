import React, { useState } from "react";

function BookingForm({ movie, onBook, onClose }) {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !tickets) {
      alert("Please fill all fields!");
      return;
    }

    if (movie.availableTickets < tickets) {
      alert("Not enough tickets available!");
      return;
    }

    onBook(movie.id, name, tickets);
    setName("");
    setTickets("");
  };

  return (
    <div className="booking-form">
      <h2>Book Tickets 🎟️</h2>
      <h3>{movie.title}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Tickets"
          value={tickets}
          onChange={(e) => setTickets(e.target.value)}
        />
        <button type="submit">Confirm Booking</button>
        <button type="button" className="close-btn" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
