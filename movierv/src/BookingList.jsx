import React from "react";

function BookingList({ bookings, movies }) {
  return (
    <section className="bookings">
      <h2>📋 Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking) => {
            const movie = movies.find((m) => m.id === booking.movieId);
            return (
              <li key={booking.id}>
                <strong>{booking.name}</strong> booked {booking.tickets} ticket(s) for{" "}
                <em>{movie?.title}</em>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default BookingList;
