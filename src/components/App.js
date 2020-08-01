import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './AppBar';
import routes from '../routes';

const HomePage = lazy(() =>
  import('../views/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('../views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h2>Downloading...</h2>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
