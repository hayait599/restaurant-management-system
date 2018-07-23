import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomePage } from '../app/containers/'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <HomePage></HomePage>
        </BrowserRouter>
    
    );
  }
}
export default connect(null)(App);