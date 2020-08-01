import React, { Component } from 'react';
import moviesApi from '../../services/movies-api';
import './Reviews.scss';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await moviesApi.getMovieReviews(movieId);
    this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        {reviews.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}

        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p className="Author">Author: {author}</p>
              <p className="Content">{content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Reviews;
