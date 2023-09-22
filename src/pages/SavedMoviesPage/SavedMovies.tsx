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
  const [unfilteredMovies, setUnfilteredMovies] =
    useState<Array<BackendMovie>>(savedMovies);
  const [moviesLoading, setMoviesLoading] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate(paths.root, {
        replace: true,
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (savedMovies.length > 0) {
      setMoviesLoading(false);
    }

    setMovies((prevMovies) =>
      prevMovies.length === 0
        ? savedMovies
        : savedMovies.filter(
            (el) =>
              prevMovies.findIndex((m) => m.movieId === el.movieId) !== -1,
          ),
    );
    setUnfilteredMovies((prevUnfilteredMovies) =>
      prevUnfilteredMovies.length === 0
        ? savedMovies
        : savedMovies.filter(
            (el) =>
              prevUnfilteredMovies.findIndex(
                (m) => m.movieId === el.movieId,
              ) !== -1,
          ),
    );
  }, [savedMovies]);

  useEffect(() => {
    if (checked) {
      setMovies(unfilteredMovies.filter((el) => el.duration <= 40));
    } else {
      setMovies(unfilteredMovies);
    }
  }, [checked]);

  async function getMovies(query: string) {
    const lowerQuery = query.toLowerCase();
    if (/[a-z]+/i.test(query)) {
      setLang('en');
    } else {
      setLang('ru');
    }
    try {
      setMoviesLoading(true);
      const data = savedMovies.filter((el) => {
        if (checked) {
          return (
            el.duration <= 40 &&
            (el.nameEN.toLowerCase().includes(lowerQuery) ||
              el.nameRU.toLowerCase().includes(lowerQuery))
          );
        } else {
          return (
            el.nameEN.toLowerCase().includes(lowerQuery) ||
            el.nameRU.toLowerCase().includes(lowerQuery)
          );
        }
      });
      setMovies(data);
      setUnfilteredMovies(data);
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
        setMovies={setMovies}
        type="saved"
        isLoading={moviesLoading}
      />
    </section>
  );
};
