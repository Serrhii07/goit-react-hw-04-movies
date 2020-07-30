import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import axios from 'axios';

const key = '30e6eb2b274ffe40b2ea0cfb44f5f954';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  componentDidMount() {
    const query = localStorage.getItem('query');
    this.setState({ query });

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${this.state.query}&page=1&include_adult=false`,
      )
      .then(response => this.setState({ movies: response.data.results }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      localStorage.setItem('query', this.state.query);
    }

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${this.state.query}&page=1&include_adult=false`,
      )
      .then(response => this.setState({ movies: response.data.results }));
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Search</button>
        </form>

        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
