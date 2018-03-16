import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

const Header = (props) => {
  return(
    <nav className="navbar d-flex text-center justify-content-end navbar-expand-sm navbar-dark bg-dark sticky-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav container d-flex justify-content-center text-center">
      		<NavLink exact to="/" className="navbar-item nav-link">HOME</NavLink>
          <NavLink to="/albums" className="navbar-item nav-link">ALBUMS</NavLink>
          <NavLink to="/tours" className="navbar-item nav-link">TOURS</NavLink>
          <NavLink to="/about" className="navbar-itam nav-link">ABOUT</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header;
