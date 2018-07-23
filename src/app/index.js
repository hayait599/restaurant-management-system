import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  HomePage from './containers/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/rest/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(null)(App);