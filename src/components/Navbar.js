/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './style/Navbars.scss';
import { Link } from 'react-router-dom';
/* import history from '../history'; */

const Navbar = () => {
  return (
    <div className="menu">
      <ul>
        <Link to="/">
          <div className="portfolio" />
        </Link>
        <Link to="/projets">
          <div className="projets" />
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
