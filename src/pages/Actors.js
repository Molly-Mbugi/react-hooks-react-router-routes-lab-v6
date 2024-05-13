import React, { useEffect, useState } from "react";

function Actors() {
  // Example state for storing actor information
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Fetch actor information here
    // Example fetch:
    // fetchActors();
  }, []);

  return (
    <>
      <header>
        {/* Header component goes here */}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.length > 0 ? (
          // Display actor information
          actors.map((actor, index) => (
            <div key={index}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, movieIndex) => (
                  <li key={movieIndex}>{movie}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          // Display loading or placeholder
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}

export default Actors;

