import { DataContext, DataContextValues } from '../../contexts';
import { MovieForm, Movies } from '../../components';
import { useContext, useEffect, useState } from 'react';
import './MoviesPage.css';
import { Movie, checkResponse, compareStrings, paths } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { getAllMovies } from '../../utils';

export const MoviesPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setPopupOpen, setPopupType, setPopupMessage } =
    useContext(DataContext) as DataContextValues;
  const [checked, setChecked] = useState<boolean>(
    () => JSON.parse(localStorage.getItem('shorts') as string) || false,
  );
  const [moviesLoading, setMoviesLoading] = useState<boolean | null>(null);
  const [movies, setMovies] = useState<Array<Movie>>(
    () => JSON.parse(localStorage.getItem('displayed-movies') as string) || [],
  );

  useEffect(() => {
    if (movies.length) {
      setMoviesLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate(paths.root, {
        replace: true,
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const moviesFromLocal = localStorage.getItem('displayed-movies');

    if (moviesFromLocal) {
      const cachedMovies = JSON.parse(moviesFromLocal) as Array<Movie>;

      if (checked) {
        setMovies(cachedMovies.filter((el) => el.duration <= 40));
      } else {
        getMovies(localStorage.getItem('movies-query') as string);
        setMovies(cachedMovies);
      }
    }

    localStorage.setItem('shorts', JSON.stringify(checked));
  }, [checked]);

  async function getMovies(query: string) {
    try {
      setMoviesLoading(true);
      let data = JSON.parse(
        localStorage.getItem('movies') as string,
      ) as Array<Movie>;
      if (!data) {
        const res = await getAllMovies();
        data = (await checkResponse(res)) as Array<Movie>;
        localStorage.setItem('movies', JSON.stringify(data));
      }

      const displayedMovies = data.filter((el) => {
        return (
          compareStrings(el.nameRU, query) || compareStrings(el.nameEN, query)
        );
      });
      setMovies(
        checked
          ? displayedMovies.filter((el) => el.duration <= 40)
          : displayedMovies,
      );
      localStorage.setItem('displayed-movies', JSON.stringify(displayedMovies));
    } catch (err: any) {
      const { message } = await err;
      setPopupType('error');
      setPopupMessage('При загрузке фильмов произошла ошибка, ' + message);
      setPopupOpen(true);
    } finally {
      setMoviesLoading(false);
    }
  }

  return (
    <section className="movies-page">
      <MovieForm
        search={getMovies}
        query="movies-query"
        checked={checked}
        setChecked={setChecked}
        isLoading={moviesLoading}
      />
      <Movies movies={movies} type="to-save" isLoading={moviesLoading} />
    </section>
  );
};
