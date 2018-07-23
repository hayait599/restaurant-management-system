import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomePage } from '../app/containers/'

class App extends Component {
  render() {
    return (
     
        <HomePage></HomePage>
    
    );
  }
}
export default connect(null)(App);