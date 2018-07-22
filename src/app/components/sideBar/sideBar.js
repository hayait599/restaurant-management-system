import React, { Component } from 'react';
import SideBarFooter  from './sideBarFooter';
import './sideBar.css'

class SideBar extends Component {
  
  renderContent() {
    return (
      <div />
    );
  }
  render() {
    return (
      <div className="container-side-bar">
        {this.renderContent()}
        <SideBarFooter />
      </div>
    );
  }
}

export default SideBar;