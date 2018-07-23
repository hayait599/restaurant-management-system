import React, { Component } from 'react';
import SideBarFooter  from './sideBarFooter';
import { Reservation } from './../index';
import './sideBar.css'

class SideBar extends Component {
  
  renderContent() {
    return (
      <Reservation />
    );
  }
  render() {
    return (
      <div className="container-side-bar">
        <Reservation />
        {this.renderContent()}
        <SideBarFooter />
      </div>
    );
  }
}

export default SideBar;