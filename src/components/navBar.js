import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Messages from './messages';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <navLink className="navbar-brand" to="/messages">Messages</navLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <NavLink className="nav-item nav-link active" to="/messages">Messages <span class="sr-only">(current)</span></NavLink>
      <NavLink className="nav-item nav-link active" to="/login">Login <span class="sr-only">(current)</span></NavLink>
      {/* <a className="nav-item nav-link" href="#">Features</a>
      <a className="nav-item nav-link" href="#">Pricing</a> */}
      <NavLink className="nav-item nav-link disabled" to="/logout">Logout</NavLink>
    </div>
  </div>
</nav>
     );
}
 
export default NavBar;