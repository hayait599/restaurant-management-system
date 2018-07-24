import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';
class Navbar extends Component {

    render () {
        return (
            <nav className="navbar navbar-expand-lg ">
            <a className="navbar-brand" >Restaurant</a>
            <div className="toggle">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              ---
              </button>
            </div>
          
            <div className="collapse navbar-collapse" id="navbarColor03">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink to="/home"  className="nav-link" >HOME <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/restaurant"  className="nav-link" >RESTAURANT</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/menu"  className="nav-link" >MENU</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/order-online" className="nav-link" >ORDER ONLINE</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/team" className="nav-link" >TEAM</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" >CONTACT</NavLink>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
              </form>
            </div>
          </nav>
        );
    }
}

export default Navbar;