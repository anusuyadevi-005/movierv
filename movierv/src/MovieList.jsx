import React from "react";

function MovieList({ movies, onSelectMovie }) {
  return (
    <section className="movies">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>🎟️ Tickets Available: {movie.availableTickets}</p>
          <button onClick={() => onSelectMovie(movie)}>Book Now</button>
        </div>
      ))}
    </section>
  );
}

export default MovieList;
