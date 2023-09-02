import { MovieForm, Movies } from '../../components';
import './SavedMovies.css';
import { movies } from './lib/constants';

export const SavedMovies = () => {
  return (
    <section className="saved-movies">
      <MovieForm />
      <Movies movies={movies} />
    </section>
  );
};
