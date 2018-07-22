import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './containers';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(null)(App);