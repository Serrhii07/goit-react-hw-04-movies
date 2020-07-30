import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import axios from 'axios';

const key = '30e6eb2b274ffe40b2ea0cfb44f5f954';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
    );

    this.setState({ trendingMovies: response.data.results });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={this.state.trendingMovies} />
      </>
    );
  }
}

export default HomePage;
