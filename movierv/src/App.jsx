import React, { useState } from "react";
import MovieList from "./MovieList";
import BookingForm from "./BookingForm";
import BookingList from "./BookingList";
import amaranPoster from './assets/amaran.jpg';
import Thalaivan from './assets/Thalaivan thalavi.jpg'; 
import Bhk from './assets/3BHK.jpg';
import final from './assets/finaldestination.jpg';




// or './images/amaran.jpg'

import "./index.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Amaran",
      availableTickets: 50,
      poster:amaranPoster,
    },
    {
      id: 2,
      title: "Thalivan thalaivi",
      availableTickets: 30,
      poster: Thalaivan,
    },
    {
      id: 3,
      title: "3BHK",
      availableTickets: 20,
      poster: Bhk,
    },
    {
      id: 4,
      title: "Final Destination ",
      availableTickets: 25,
      poster: final,
    },
  ]);

  const [bookings, setBookings] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleBooking = (movieId, name, tickets) => {
    const ticketCount = parseInt(tickets);

    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId && movie.availableTickets >= ticketCount
          ? { ...movie, availableTickets: movie.availableTickets - ticketCount }
          : movie
      )
    );

    setBookings((prev) => [
      ...prev,
      { id: bookings.length + 1, name, movieId, tickets: ticketCount },
    ]);
    setSelectedMovie(null); // Close form after booking
  };

  return (
    <div className="app">
      <header>
        <h1>🎬 CineBook</h1>
      </header>

      <main className="content">
        <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
        <BookingList bookings={bookings} movies={movies} />
      </main>

      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <BookingForm
              movie={selectedMovie}
              onBook={handleBooking}
              onClose={() => setSelectedMovie(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
