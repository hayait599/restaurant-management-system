import React, { Component } from 'react';
import { Navbar, SideBar } from '../../components';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container-app">
          <div className="left-side">
            <SideBar />
          </div>
          <div className="right-side">hhhhhhhhhh</div>
        </div>
      </div>
    );
  }
}
export default HomePage;