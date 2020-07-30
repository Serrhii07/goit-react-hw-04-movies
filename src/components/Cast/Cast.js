import React, { Component } from 'react';
import axios from 'axios';

const key = '30e6eb2b274ffe40b2ea0cfb44f5f954';

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`,
    );

    this.setState({ actors: response.data.cast });
  }

  render() {
    const imgURL = 'https://image.tmdb.org/t/p/w200/';

    return (
      <>
        <ul>
          {this.state.actors.map(
            ({ cast_id, name, character, profile_path }) => (
              <li key={cast_id}>
                <img src={`${imgURL}${profile_path}`} alt={name} />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ),
          )}
        </ul>
      </>
    );
  }
}

export default Cast;
