export interface MovieProps {
  title: string;
  duration: number;
  image: string;
  type?: 'to-save' | 'saved';
}

export interface MoviesProps {
  movies: Array<MovieProps>;
}
