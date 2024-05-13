import Home from './pages/Home';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/movie/:id',
    component: Movie,
    exact: true
  },
  {
    path: '/directors',
    component: Directors,
    exact: true
  },
  {
    path: '/actors',
    component: Actors,
    exact: true
  },
  // Add a catch-all route for 404 errors
  {
    component: ErrorPage
  }
];

export default routes;

