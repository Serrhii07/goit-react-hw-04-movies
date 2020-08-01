import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.defaultProps = {
  movies: [],
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default withRouter(MoviesList);
