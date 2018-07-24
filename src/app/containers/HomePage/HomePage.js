import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, SideBar } from '../../components';
import { Menu, Team, Contact} from '../../containers';

import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-3">
          </div>
          <div className="col-sm-2">
            <SideBar />
          </div>
          <div className="col-sm">
            <Navbar />
              <div className="scroll">
                <Switch>
                  <Route path="/home" />
                  <Route path="/restaurent" />
                  <Route path="/menu" component={Menu} />
                  <Route path="/order-online" />
                  <Route path="/team" component={Team} />
                  <Route path="/contact" />
                </Switch>
              </div>
            </div>
         </div>
      </div>
    );
  }
}
export default HomePage;