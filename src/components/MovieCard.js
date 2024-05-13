import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ title, id }) {
  return (
    <article>
      <h2>{title}</h2>
      {/* Link to the movie details page */}
      <Link to={`/movie/${id}`}>Details</Link>
    </article>
  );
};

export default MovieCard;
