import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import moviesApi from '../services/movies-api';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  componentDidMount() {
    const query = localStorage.getItem('query');

    if (query) {
      this.setState({ query }, () => {
        this.fetchMovies();
      });
    }
  }

  fetchMovies = () => {
    const { query } = this.state;

    moviesApi.fetchMovies(query).then(movies => {
      this.setState({
        movies,
      });
    });
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    localStorage.setItem('query', query);

    this.fetchMovies();
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            className="Search_input"
          ></input>
          <button type="submit" className="Search_input_btn">
            Search
          </button>
        </form>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
