import { AUTH_BASE_URL } from './constants';

async function register(name: string, email: string, password: string) {
  const response = await fetch(`${AUTH_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ name, email, password }),
  });

  return response;
}

async function authorize(email: string, password: string) {
  const response = await fetch(`${AUTH_BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });

  return response;
}

async function logout() {
  const response = await fetch(`${AUTH_BASE_URL}/signout`, {
    method: 'DELETE',
    credentials: 'include',
  });

  return response;
}

async function getContent() {
  const response = await fetch(`${AUTH_BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  return response;
}

async function updateUserInfo(name: string, email: string) {
  const response = await fetch(`${AUTH_BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
    credentials: 'include',
  });

  return response;
}

export const auth = {
  updateUserInfo,
  getContent,
  authorize,
  register,
  logout,
};
