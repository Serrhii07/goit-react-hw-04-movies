import axios from 'axios';
const key = '30e6eb2b274ffe40b2ea0cfb44f5f954';
const baseURL = 'https://api.themoviedb.org/3';

const fetchMovies = (searchQuery = '') => {
  return axios
    .get(
      `${baseURL}/search/movie?api_key=${key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};

const getTrendingMovies = () => {
  return axios.get(`${baseURL}/trending/movie/day?api_key=${key}`);
};

const getMovieDetails = movieId => {
  return axios.get(`${baseURL}/movie/${movieId}?api_key=${key}`);
};

const getMovieReviews = movieId => {
  return axios.get(
    `${baseURL}/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
  );
};

const getMovieCast = movieId => {
  return axios.get(`${baseURL}/movie/${movieId}/credits?api_key=${key}`);
};

const movieImgURL = 'https://image.tmdb.org/t/p/w300/';
const actorImgURL = 'https://image.tmdb.org/t/p/w200/';

export default {
  fetchMovies,
  getTrendingMovies,
  getMovieDetails,
  getMovieReviews,
  getMovieCast,
  movieImgURL,
  actorImgURL,
};
