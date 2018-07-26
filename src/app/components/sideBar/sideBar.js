import React, { Component } from 'react';
import SideBarFooter from './sideBarFooter';
import Header from './header';

import Content from './content';
import './sideBar.css'

class SideBar extends Component {


  render() {

    return (
      <div className="container-side-bar">
        <Header />
        {/* {this.renderContent()} */}
        <Content />
        <SideBarFooter />
      </div>
    );
  }
}

export default SideBar;