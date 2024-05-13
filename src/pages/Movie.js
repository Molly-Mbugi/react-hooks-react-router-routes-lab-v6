import React, { useEffect, useState } from "react";

function Movie() {
  // State to store movie information
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    // Fetch movie information here
    // Example fetch:
    // fetchMovieInfo();
  }, []);

  return (
    <>
      <header>
        {/* Header component goes here */}
      </header>
      <main>
        {movieInfo ? (
          // Display movie information
          <div>
            <h1>{movieInfo.title}</h1>
            <p>Time: {movieInfo.time}</p>
            <div>
              Genres:
              {movieInfo.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
            {/* Add more movie details here */}
          </div>
        ) : (
          // Display loading or placeholder
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}

export default Movie;

