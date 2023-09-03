import { paths } from '../../utils';
import { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

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

const routes = createRoutesFromElements(
  <Route path={paths.root}>
    <Route element={<AppLayout />}>
      <Route index element={<MainPage />} />
      <Route path={paths.movies} element={<MoviesPage />} />
      <Route path={paths.saved} element={<SavedMovies />} />
      <Route path={paths.profile} />
    </Route>
    <Route element={<SimpleLayout />}>
      <Route path={paths.signin} />
      <Route path={paths.signup} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Route>,
);

const router = createBrowserRouter(routes);

export const App = () => {
  return <RouterProvider router={router} />;
};
