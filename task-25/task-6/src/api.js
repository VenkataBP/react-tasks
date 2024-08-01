import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

const App = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let api = "https://freetestapi.com/api/v1/movies/1";
        const res = await axios.get(api);
        console.log(res);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', color: 'darkolivegreen' }}>Movie Details</h1>
      {movie ? (
        <div className="card">
          <h2>{movie.title}</h2>
          <p><strong>ID:</strong> {movie.id}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
          <p><strong>Country:</strong> {movie.country}</p>
          <p><strong>Awards:</strong> {movie.awards}</p>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default App;
