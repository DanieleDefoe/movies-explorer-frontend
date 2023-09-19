import { DataContext, DataContextValues } from '../../contexts';
import { MovieForm, Movies } from '../../components';
import { useContext, useEffect, useState } from 'react';
import './MoviesPage.css';
import { Movie, checkResponse, paths } from '../../utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllMovies } from '../../utils';

export const MoviesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    const currentPath = location.pathname;

    if (!isLoggedIn) {
      return navigate(`${paths.signin}?redirectTo=${currentPath}`, {
        replace: true,
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('shorts', JSON.stringify(checked));
  }, [checked]);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

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
      setMovies(
        data.filter((el) => {
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
        }),
      );
      localStorage.setItem('movies', JSON.stringify(data));
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
