import { CalcMoviesAmount } from './types';

export function checkResponse(response: Response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response.json());
}

export function calculateMoviesAmount(): CalcMoviesAmount {
  const { innerWidth: width } = window;

  if (width >= 1280) {
    return { amount: 12, toAdd: 3 };
  }

  if (width >= 768) {
    return { amount: 8, toAdd: 2 };
  }

  return { amount: 5, toAdd: 2 };
}

export function compareStrings(str1: string, str2: string) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}
