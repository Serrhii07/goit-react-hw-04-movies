import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import AdditionalInfoNav from '../components/AdditionalInfoNav';
import routes from '../routes';
import moviesApi from '../services/movies-api';

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

    const response = await moviesApi.getMovieDetails(movieId);
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
    const { movieId } = this.props.match.params;
    const { poster_path, title, vote_count, overview, genres } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleGoBack} className="GoBackBtn">
          &#8592; Go back
        </button>
        <div className="MovieInfoWrap">
          <img src={`${moviesApi.movieImgURL}${poster_path}`} alt={title} />
          <div className="MovieInfo">
            <h2 className="MovieInfo_title">
              {title} ({this.getYear()})
            </h2>
            <p className="MovieInfo_score">User Score: {vote_count}%</p>
            <h3 className="MovieInfo_overview">Overview</h3>
            <p className="MovieInfo_text">{overview}</p>
            <h3 className="MovieInfo_genres">Genres</h3>
            <ul className="MovieInfo_genres_list">
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="Additional_info">
          <p>Additional information</p>
          <AdditionalInfoNav movieId={movieId} />
        </div>

        <Switch>
          <Route path={`${this.props.match.path}/cast`} component={Cast} />
          <Route
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
