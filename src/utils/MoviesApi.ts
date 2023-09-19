import { AUTH_BASE_URL, MOVIES_BASE_URL } from './constants';
import { BackendMovie, Movie } from './types';

export async function getAllMovies() {
  const response = await fetch(MOVIES_BASE_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return response;
}

export async function getSavedMovies() {
  const response = await fetch(`${AUTH_BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  return response;
}

export async function saveMovie(movie: BackendMovie) {
  const response = await fetch(`${AUTH_BASE_URL}/movies`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(movie),
    credentials: 'include',
  });

  return response;
}

export async function removeMovie(id: string) {
  const response = await fetch(`${AUTH_BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  return response;
}
