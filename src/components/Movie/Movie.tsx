import { FC } from 'react';
import './Movie.css';
import { MovieProps } from '../Movies/lib/types';
import { images } from '../../images';

export const Movie: FC<MovieProps> = ({ title, duration, image, type }) => {
  let durationString = '';

  if (duration / 60 >= 60) {
    const hours = Math.floor(duration / 60 / 60);
    const minutes = Math.floor((duration - hours * 3600) / 60);
    durationString += `${hours}ч ${minutes}м`;
  } else {
    const minutes = Math.floor(duration / 60);
    durationString += `${minutes}м`;
  }

  return (
    <article className="movie">
      <div className="movie__info">
        <h4 className="movie__title">{title}</h4>
        <p className="movie__duration">{durationString}</p>
      </div>
      <img src={image} alt="обложка фильма" className="movie__preview" />
      {type === 'saved' && (
        <button className="movie__save">
          <img src={images.cross} alt="крестик" width="20px" />
        </button>
      )}
      {type === 'to-save' && <button className="movie__save">Сохранить</button>}
    </article>
  );
};
