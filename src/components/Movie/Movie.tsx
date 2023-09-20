/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, useContext, useState } from 'react';
import './Movie.css';
import { MovieProps } from '../Movies/lib/types';
import {
  saveMovie,
  checkResponse,
  removeMovie,
  PRACTICUM_URL,
  User,
  BackendMovie,
  Movie as MovieType,
} from '../../utils';
import {
  CurrentUserContext,
  DataContext,
  DataContextValues,
} from '../../contexts';

export const Movie: FC<MovieProps> = ({ type, movie, lang }) => {
  const { savedMovies, setSavedMovies } = useContext(
    DataContext,
  ) as DataContextValues;
  const user = useContext(CurrentUserContext) as User;

  const [saving, setSaving] = useState<boolean>(false);

  function isSavedMovie(movie: any): movie is BackendMovie {
    return movie.movieId;
  }

  const isSaved = savedMovies.find(
    (el) =>
      el.movieId === String(isSavedMovie(movie) ? movie.movieId : movie.id),
  );
  let durationString = '';

  if (movie.duration / 60 >= 1) {
    const hours = Math.floor(movie.duration / 60);
    const minutes = Math.floor(movie.duration - hours * 60);
    durationString += `${hours}ч ${minutes}м`;
  } else {
    const minutes = movie.duration % 60;
    durationString += `${minutes}м`;
  }

  async function handleSave() {
    try {
      setSaving(true);
      const res = await saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        trailerLink: movie.trailerLink,
        thumbnail: !isSavedMovie(movie)
          ? `${PRACTICUM_URL}${movie.image.formats.thumbnail.url}`
          : '',
        owner: {
          _id: user.id,
        },
        movieId: String(!isSavedMovie(movie) && movie.id),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        image: isSavedMovie(movie) ? '' : `${PRACTICUM_URL}${movie.image.url}`,
      });
      const movieToSave = await checkResponse(res);
      setSavedMovies((prevSavedMovies) => [...prevSavedMovies, movieToSave]);
    } catch (err) {
      console.log(err);
    } finally {
      setSaving(false);
    }
  }

  async function handleRemove() {
    try {
      setSaving(true);
      const res = await removeMovie(
        isSavedMovie(movie) ? movie.movieId : String(movie.id),
      );
      await checkResponse(res);
      if (isSavedMovie(movie)) {
        setSavedMovies((prevSavedMovies) =>
          prevSavedMovies.filter((el) => el.movieId !== movie.movieId),
        );
      } else {
        setSavedMovies((prevSavedMovies) =>
          prevSavedMovies.filter((el) => el.movieId !== String(movie.id)),
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSaving(false);
    }
  }

  return (
    <article className="movie">
      <div className="movie__info">
        <h4 className="movie__title">
          {lang === 'en' ? movie.nameEN : movie.nameRU}
        </h4>
        <p className="movie__duration">{durationString}</p>
      </div>
      <a
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        <img
          src={
            isSavedMovie(movie) ? movie.image : PRACTICUM_URL + movie.image.url
          }
          alt="обложка фильма"
          className="movie__preview"
        />
      </a>
      {type === 'saved' && (
        <button
          className="movie__remove"
          onClick={handleRemove}
          disabled={saving}
        />
      )}
      {type === 'to-save' && (
        <button
          className={`movie__save ${isSaved ? 'movie__save_type_saved' : ''}`}
          onClick={isSaved ? handleRemove : handleSave}
          disabled={saving}
        />
      )}
    </article>
  );
};
