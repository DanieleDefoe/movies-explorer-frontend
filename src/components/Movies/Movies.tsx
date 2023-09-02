import { FC } from 'react';
import { Movie } from '..';
import './Movies.css';
import { MoviesProps } from './lib/types';

export const Movies: FC<MoviesProps> = ({ movies }) => {
  return (
    <section className="movies">
      <ul className="movies__grid">
        {movies.map(({ title, duration, image, type }, idx) => (
          <li key={idx}>
            <Movie
              title={title}
              duration={duration}
              image={image}
              type={type}
            />
          </li>
        ))}
      </ul>
      {movies.length >= 12 && <button className="movies__more">Ещё</button>}
    </section>
  );
};
