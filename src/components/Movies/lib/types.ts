import { BackendMovie, Movie } from '../../../utils';

export interface MovieProps {
  type?: 'to-save' | 'saved';
  lang?: 'en' | 'ru';
  movie: Movie | BackendMovie;
}

export interface MoviesProps {
  movies: Array<Movie | BackendMovie>;
  type?: 'to-save' | 'saved';
  isLoading?: boolean | null;
  lang?: 'en' | 'ru' | undefined;
}
