import { MovieForm, Movies } from '../../components';
import './SavedMovies.css';
import { DataContext, DataContextValues } from '../../contexts';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackendMovie, paths } from '../../utils';

export const SavedMovies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    isLoggedIn,
    savedMovies,
    setPopupOpen,
    setPopupMessage,
    setPopupType,
  } = useContext(DataContext) as DataContextValues;

  const [checked, setChecked] = useState<boolean>(false);
  const [lang, setLang] = useState<'en' | 'ru'>('ru');
  const [movies, setMovies] = useState<Array<BackendMovie>>(
    () => JSON.parse(localStorage.getItem('saved-movies') as string) || [],
  );
  const [moviesLoading, setMoviesLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const currentLocation = location.pathname;

    if (!isLoggedIn) {
      return navigate(`${paths.signin}?redirectTo=${currentLocation}`, {
        replace: true,
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (savedMovies.length > 0) {
      setMoviesLoading(false);
    }

    setMovies(structuredClone(savedMovies));
  }, [savedMovies]);

  useEffect(() => {
    if (checked) {
      setMovies(savedMovies.filter((el) => el.duration <= 40));
    } else {
      setMovies(savedMovies);
    }
  }, [checked]);

  async function getMovies(query: string) {
    if (/[a-z]+/i.test(query)) {
      setLang('en');
    } else {
      setLang('ru');
    }
    try {
      setMoviesLoading(true);
      setMovies(
        savedMovies.filter((el) => {
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
        checked={checked}
        setChecked={setChecked}
        isLoading={moviesLoading}
      />
      <Movies
        movies={movies}
        type="saved"
        isLoading={moviesLoading}
        lang={lang}
      />
    </section>
  );
};
