import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdditionalInfoNav = ({ movieId }) => {
  return (
    <ul>
      <li>
        <NavLink
          to={`/movies/${movieId}/cast`}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/movies/${movieId}/reviews`}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

AdditionalInfoNav.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default AdditionalInfoNav;
