import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul className="NavigationMenu">
        <li className="NavigationItem">
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink
            to={routes.movies}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
