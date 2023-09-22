/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BackendMovie, User, auth, getSavedMovies, paths } from '../../utils';
import { lazy, useState, useEffect, useCallback } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { ContextsContainer } from '../../contexts';
import { checkResponse } from '../../utils';
import { Popup } from '..';

const AppLayout = lazy(() =>
  import('../../layouts/AppLayout').then((module) => ({
    default: module.AppLayout,
  })),
);

const SimpleLayout = lazy(() =>
  import('../../layouts/SimpleLayout').then((module) => ({
    default: module.SimpleLayout,
  })),
);

const MainPage = lazy(() =>
  import('../../pages/MainPage').then((module) => ({
    default: module.MainPage,
  })),
);

const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage').then((module) => ({
    default: module.MoviesPage,
  })),
);

const SavedMovies = lazy(() =>
  import('../../pages/SavedMoviesPage').then((module) => ({
    default: module.SavedMovies,
  })),
);

const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  })),
);

const ProfilePage = lazy(() =>
  import('../../pages/ProfilePage').then((module) => ({
    default: module.ProfilePage,
  })),
);

const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage').then((module) => ({
    default: module.RegisterPage,
  })),
);

const LoginPage = lazy(() =>
  import('../../pages/LoginPage').then((module) => ({
    default: module.LoginPage,
  })),
);

const routes = createRoutesFromElements(
  <Route path={paths.root}>
    <Route element={<AppLayout />}>
      <Route index element={<MainPage />} />
      <Route element={<MoviesPage />} path={paths.movies} />
      <Route element={<SavedMovies />} path={paths.saved} />
      <Route element={<ProfilePage />} path={paths.profile} />
    </Route>
    <Route element={<SimpleLayout />}>
      <Route path={paths.signin} element={<LoginPage />} />
      <Route path={paths.signup} element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Route>,
);

const router = createBrowserRouter(routes);

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => JSON.parse(localStorage.getItem('loggedIn') as string) || false,
  );
  const [isSearchLoading, setIsSearchLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [savedMovies, setSavedMovies] = useState<Array<BackendMovie>>([]);

  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [popupType, setPopupType] = useState<'error' | 'success'>();
  const [popupMessage, setPopupMessage] = useState<string>('');

  const handleEscapeClick = useCallback(function handleEscapeClick(
    event: KeyboardEvent,
  ) {
    if (event.key === 'Escape') {
      setPopupOpen(false);
    }
  }, []);

  useEffect(() => {
    if (popupOpen) {
      window.addEventListener('keyup', handleEscapeClick);
    }

    return () => {
      window.removeEventListener('keyup', handleEscapeClick);
    };
  }, [popupOpen]);

  console.log(popupOpen);

  useEffect(() => {
    if (isLoggedIn) {
      fetchSavedMovies();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    checkToken();
  }, [isLoggedIn]);

  const handleLogin = useCallback(function handleLogin() {
    setIsLoggedIn(true);
  }, []);

  const handleLogout = useCallback(function handleLogout() {
    setIsLoggedIn(false);
  }, []);

  const fetchSavedMovies = useCallback(async function fetchSavedMovies() {
    try {
      const res = await getSavedMovies();
      const data = await checkResponse(res);
      setSavedMovies(data);
      localStorage.setItem('saved-movies', JSON.stringify(data));
    } catch (err) {
      setPopupType('error');
      setPopupMessage('Произошла ошибка при загрузке сохраненных фильмов');
      setPopupOpen(true);
    }
  }, []);

  const checkToken = useCallback(async function checkToken() {
    try {
      const res = await auth.getContent();
      const data = await checkResponse(res);
      if (data) {
        localStorage.setItem('loggedIn', JSON.stringify(true));
        handleLogin();
        setCurrentUser({ ...data, id: data._id });
      } else {
        handleLogout();
      }
    } catch (error) {
      localStorage.setItem('loggedIn', JSON.stringify(false));
      const { message } = (await error) as any;
      setPopupType('error');
      setPopupMessage(message);
      setPopupOpen(true);
      handleLogout();
    }
  }, []);

  const authorizeUser = useCallback(async function authorizeUser(
    email: string,
    password: string,
  ) {
    try {
      setIsSearchLoading(true);
      const res = await auth.authorize(email, password);
      const data = await checkResponse(res);
      if (data._id) {
        handleLogin();
      }
      return data;
    } catch (error) {
      const { message } = (await error) as any;
      setPopupType('error');
      setPopupMessage(message);
      setPopupOpen(true);
    } finally {
      setIsSearchLoading(false);
    }
  }, []);

  const logoutUser = useCallback(async function logoutUser() {
    try {
      await auth.logout();
      setCurrentUser(null);
      handleLogout();
      localStorage.clear();
    } catch (err) {
      setPopupType('error');
      setPopupMessage('При выходе из аккаунта произошла ошибка');
      setPopupOpen(true);
    }
  }, []);

  const registerUser = useCallback(async function registerUser(
    name: string,
    email: string,
    password: string,
  ) {
    try {
      setIsSearchLoading(true);
      const res = await auth.register(name, email, password);
      await checkResponse(res);
      await authorizeUser(email, password);
      return res.ok;
    } catch (err) {
      const { message } = (await err) as any;
      setPopupType('error');
      setPopupMessage(message);
      setPopupOpen(true);
    } finally {
      setIsSearchLoading(false);
    }
  }, []);

  const updateUserData = useCallback(async function updateUserData(
    name: string,
    email: string,
  ) {
    try {
      setIsSearchLoading(true);
      const res = await auth.updateUserInfo(name, email);
      const data = await checkResponse(res);
      setCurrentUser({ name: data.name, email: data.email, id: data._id });
      setPopupType('success');
      setPopupMessage('Данные успешно обновлены');
      setPopupOpen(true);
    } catch (err) {
      const { message } = (await err) as any;
      setPopupType('error');
      setPopupMessage(
        'Пользователь с таким email уже зарегистрирован или ' + message,
      );
      setPopupOpen(true);
    } finally {
      setIsSearchLoading(false);
    }
  }, []);

  return (
    <ContextsContainer
      user={currentUser}
      signup={registerUser}
      signin={authorizeUser}
      signout={logoutUser}
      isLoggedIn={isLoggedIn}
      isSearchLoading={isSearchLoading}
      updateUserData={updateUserData}
      savedMovies={savedMovies}
      setSavedMovies={setSavedMovies}
      fetchSavedMovies={fetchSavedMovies}
      setPopupOpen={setPopupOpen}
      setPopupType={setPopupType}
      setPopupMessage={setPopupMessage}
    >
      <RouterProvider router={router} />
      <Popup message={popupMessage} type={popupType} open={popupOpen} />
    </ContextsContainer>
  );
};
