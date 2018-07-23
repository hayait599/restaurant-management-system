import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Navbar, SideBar } from '../../components';
import Team from '../../containers/team/team';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-app">
          <div className="left-side">
            <SideBar />
          </div>
          <div className="right-side navbar-light bg-light"> <Navbar></Navbar></div>
          <Switch>
                <Route path="/home" />
                <Route path="/restaurent" />
                <Route path="/menu" />
                <Route path="/order-online" />
                <Route path="/team" Component={Team} />
                <Route path="/contact" />
            </Switch>
        </div>
      </div>
    );
  }
}
export default HomePage;