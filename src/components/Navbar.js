/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './style/Navbars.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
/* import history from '../history'; */

const Navbar = () => {
  return (
    <div className="menu">
      <ul>
        <Link to="/">
          <div className="portfolio" />
        </Link>
        <Link to="/work">
          <div className="work" />
        </Link>
      </ul>
    </div>
  );
};

export default withRouter(Navbar);
