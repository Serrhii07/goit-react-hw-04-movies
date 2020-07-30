import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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

export default withRouter(MoviesList);
