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

const routes = createRoutesFromElements(
  <Route path="/">
    <Route element={<AppLayout />}>
      <Route index element={<MainPage />} />
      <Route path="movies" />
      <Route path="saved-movies" />
      <Route path="profile" />
    </Route>
    <Route element={<SimpleLayout />}>
      <Route path="signin" />
      <Route path="signup" />
      <Route path="*" element={<h1>HELLO</h1>} />
    </Route>
  </Route>,
);

const router = createBrowserRouter(routes);

export const App = () => {
  return <RouterProvider router={router} />;
};
