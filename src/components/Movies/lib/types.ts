import { Dispatch, SetStateAction } from 'react';
import { BackendMovie, Movie } from '../../../utils';

export interface MovieProps {
  type?: 'to-save' | 'saved';
  movie: Movie | BackendMovie;
}

export interface MoviesProps {
  movies: Array<Movie | BackendMovie>;
  type?: 'to-save' | 'saved';
  isLoading?: boolean | null;
  setMovies?: Dispatch<SetStateAction<Array<BackendMovie>>>;
}
