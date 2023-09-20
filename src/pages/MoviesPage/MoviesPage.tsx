import { DataContext, DataContextValues } from '../../contexts';
import { MovieForm, Movies } from '../../components';
import { useContext, useEffect, useState } from 'react';
import './MoviesPage.css';
import { Movie, checkResponse, paths } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { getAllMovies } from '../../utils';

export const MoviesPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setPopupOpen, setPopupType, setPopupMessage } =
    useContext(DataContext) as DataContextValues;
  const [checked, setChecked] = useState<boolean>(
    () => JSON.parse(localStorage.getItem('shorts') as string) || false,
  );
  const [lang, setLang] = useState<'en' | 'ru'>();
  const [moviesLoading, setMoviesLoading] = useState<boolean | null>(null);
  const [movies, setMovies] = useState<Array<Movie>>(
    () => JSON.parse(localStorage.getItem('movies') as string) || [],
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
    const moviesFromLocal = localStorage.getItem('movies');

    if (moviesFromLocal) {
      const cachedMovies = JSON.parse(moviesFromLocal) as Array<Movie>;

      if (checked) {
        setMovies(cachedMovies.filter((el) => el.duration <= 40));
      } else {
        setMovies(cachedMovies);
      }
    }

    localStorage.setItem('shorts', JSON.stringify(checked));
  }, [checked]);

  async function getMovies(query: string) {
    if (/[a-z]+/i.test(query)) {
      setLang('en');
    } else {
      setLang('ru');
    }
    try {
      setMoviesLoading(true);
      const res = await getAllMovies();
      const data = (await checkResponse(res)) as Array<Movie>;
      const displayedMovies = data.filter((el) => {
        if (checked) {
          if (el.duration > 40) {
            return false;
          } else if (lang === 'en') {
            return el.nameEN.toLowerCase().includes(query.toLowerCase());
          } else {
            return el.nameRU.toLowerCase().includes(query.toLowerCase());
          }
        } else {
          if (lang === 'en') {
            return el.nameEN.toLowerCase().includes(query.toLowerCase());
          } else {
            return el.nameRU.toLowerCase().includes(query.toLowerCase());
          }
        }
      });
      setMovies(displayedMovies);
      localStorage.setItem('movies', JSON.stringify(displayedMovies));
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
      <Movies
        movies={movies}
        type="to-save"
        isLoading={moviesLoading}
        lang={lang}
      />
    </section>
  );
};
