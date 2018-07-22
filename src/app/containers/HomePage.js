import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';

import '../../App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route path="/home" />
            <Route path="/restaurent" />
            <Route path="/menu" />
            <Route path="/order-online" />
            <Route path="/team" />
            <Route path="/contact" />
          </Switch>
      </div>
    );
  }
}
export default HomePage;