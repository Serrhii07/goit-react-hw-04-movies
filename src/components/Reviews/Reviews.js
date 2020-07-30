import React, { Component } from 'react';
import axios from 'axios';

const key = '30e6eb2b274ffe40b2ea0cfb44f5f954';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
    );

    this.setState({ reviews: response.data.results });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
