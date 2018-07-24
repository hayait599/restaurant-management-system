import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomePage } from '../app/containers/'
import './../index.css'

class App extends Component {

  componentDidMount() {
    //this.props.testAction(true);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="bg">
          <HomePage />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => {
  return {

  };
}
export default connect(mapStateToProps)(App);