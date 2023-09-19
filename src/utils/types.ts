export interface User {
  name: string;
  email: string;
  id: string;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      hash: string;
      ext: string;
      mime: string;
      width: number;
      height: number;
      size: string;
      path: null | string;
      url: string;
    };
    small: {
      hash: string;
      ext: string;
      mime: string;
      width: number;
      height: number;
      size: number;
      path: null | string;
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: null | string;
  created_at: string;
  updated_at: string;
}

export interface Movie {
  id: number;
  nameRU: string;
  nameEN: string;
  director: string;
  country: string;
  year: string;
  duration: number;
  description: string;
  trailerLink: string;
  created_at: string;
  updated_at: string;
  image: Image;
}

export interface BackendMovie {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  image: string;
  trailerLink: string;
  thumbnail: string;
  owner: {
    _id: string;
  };
  movieId: string;
  nameRU: string;
  nameEN: string;
}

export interface CalcMoviesAmount {
  amount: number;
  toAdd: number;
}
