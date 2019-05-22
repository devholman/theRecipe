import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import Ink from '../static/images/ink.js';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    exact
    className="p1 mx2 black text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => {
  return (
    <header className="flex items-center justify-between px4">
      <div>
        <h1 className="h1 inline-block mr2">
          <span role="img" aria-label="eating utensils">
            🍽️
          </span>
          My Recipe
        </h1>
        <span className="mr1">by</span>
        <Ink height={'50px'} />
      </div>

      <nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/favorites">Faves</HeaderLink>
      </nav>
    </header>
  );
};
HeaderLink.propTypes = {
  children: propTypes.node
};

export default Header;
