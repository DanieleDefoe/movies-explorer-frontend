import { FC, useState, useEffect } from 'react';
import { Movie, Preloader } from '..';
import './Movies.css';
import { MoviesProps } from './lib/types';
import {
  BackendMovie,
  CalcMoviesAmount,
  calculateMoviesAmount,
} from '../../utils';

export const Movies: FC<MoviesProps> = ({ movies, type, isLoading }) => {
  const [moviesAmount, setMoviesAmount] = useState<CalcMoviesAmount>(() =>
    calculateMoviesAmount(),
  );

  useEffect(() => {
    function handleResize() {
      const result = calculateMoviesAmount();

      setMoviesAmount(result);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setMoviesAmount(calculateMoviesAmount());
  }, [movies]);

  function isSavedMovie(movie: any): movie is BackendMovie {
    return movie.movieId;
  }

  function handleMoreMovies() {
    setMoviesAmount((prevMoviesAmount) => ({
      ...prevMoviesAmount,
      amount: prevMoviesAmount.amount + prevMoviesAmount.toAdd,
    }));
  }

  return (
    <section className="movies">
      {isLoading && <Preloader />}
      {isLoading === false && movies.length === 0 && (
        <h3 className="movies__not-found">
          По вашему запросу ничего не найдено...
        </h3>
      )}
      {isLoading === false && movies.length > 0 && (
        <>
          <ul className="movies__grid">
            {movies
              .slice(
                0,
                type === 'to-save' ? moviesAmount.amount : movies.length,
              )
              .map(
                (movie) =>
                  movie && (
                    <li key={isSavedMovie(movie) ? movie.movieId : movie.id}>
                      <Movie type={type} movie={movie} />
                    </li>
                  ),
              )}
          </ul>
          {type === 'to-save' && movies.length > moviesAmount.amount && (
            <button className="movies__more" onClick={handleMoreMovies}>
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
};
