import { MovieForm, Movies } from '../../components';
import './MoviesPage.css';
import { movies } from './lib/constants';

export const MoviesPage = () => {
  return (
    <section className="movies-page">
      <MovieForm />
      <Movies movies={movies} />
    </section>
  );
};
