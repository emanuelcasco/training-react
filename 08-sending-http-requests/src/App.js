import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const raw = await fetch(
        'https://react-http-1e585-default-rtdb.firebaseio.com/movies.json'
      );
      if (!raw.ok) throw new Error('');

      const response = await raw.json();

      const movies = response.results.map((movie) => ({
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      }));
      setMovies(movies);
    } catch (error) {
      console.error(error);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button disabled={isLoading} onClick={fetchMoviesHandler}>
          Fetch Movies
        </button>
      </section>
      <section>
        {isLoading ? <p>Loading...</p> : <MoviesList movies={movies} />}
        {error && <p>Something went wrong</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
