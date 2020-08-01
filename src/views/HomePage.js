import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import moviesApi from '../services/movies-api';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const { data } = await moviesApi.getTrendingMovies();

    this.setState({
      trendingMovies: data.results,
    });
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={trendingMovies} />
      </>
    );
  }
}

export default HomePage;
