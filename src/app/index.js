import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  HomePage from './containers/HomePage/HomePage';
import { testAction } from './actions/index'
class App extends Component {

  componentDidMount() {
    this.props.testAction(true);
  }
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
const mapStateToProps = (state) => {
  return {

  };
}
export default connect(mapStateToProps, { testAction })(App);