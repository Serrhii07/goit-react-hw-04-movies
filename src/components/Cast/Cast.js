import React, { Component } from 'react';
import moviesApi from '../../services/movies-api';
import './Cast.scss';

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await moviesApi.getMovieCast(movieId);
    this.setState({ actors: response.data.cast });
  }

  render() {
    const { actors } = this.state;

    return (
      <>
        <ul>
          {actors.map(({ cast_id, name, character, profile_path }) => (
            <li key={cast_id}>
              <img
                src={`${moviesApi.actorImgURL}${profile_path}`}
                alt={name}
                className="Actor"
              />
              <p className="Name">{name}</p>
              <p className="Character">Character: {character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
