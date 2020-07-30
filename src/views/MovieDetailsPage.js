import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';

const key = '30e6eb2b274ffe40b2ea0cfb44f5f954';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    overview: null,
    genres: [],
    release_date: null,
    vote_count: null,
    poster_path: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`,
    );

    this.setState({ ...response.data });
  }

  getYear = () => {
    const { release_date } = this.state;
    if (release_date) {
      return release_date.slice(0, 4);
    }
  };

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.home);
  };

  render() {
    const { poster_path, title, vote_count, overview, genres } = this.state;
    const imgURL = 'https://image.tmdb.org/t/p/w300/';

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          &#8592; Go back
        </button>
        <img src={`${imgURL}${poster_path}`} alt={title} />
        <div>
          <h2>
            {title} ({this.getYear()})
          </h2>
          <p>User Score: {vote_count}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>

        <p>Additional information</p>
        <ul>
          <li>
            <NavLink
              to={`${this.props.match.url}/cast`}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${this.props.match.url}/reviews`}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={`${this.props.match.path}/cast`} component={Cast} />
          <Route
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
