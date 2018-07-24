import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa'
import './sideBar.css'

class Header extends Component {

  render() {
    return (
      <div className="side-bar-header">

        <div className="header-content">
         <h3> Logo   </h3>
     
        </div>
        <hr />
      </div>
    );
  }
}
export default Header;