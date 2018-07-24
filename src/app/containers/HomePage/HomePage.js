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

                <div className="col-2 col-lg-3">
                </div>

                <div className="col-12 col-sm-6 col-lg-8">
               
                </div>

              

            </div>
            <div className="row">
            
                  <div className="col-2 col-sm-3">
                  </div>

                  <div className="col-2 col-sm-2">
                     <SideBar />
                  </div>

                  <div className=" col-2 col-sm">
                     <Navbar/>
                     <div className="scroll">
                        {/* <Team/> Replace it by team route - Haya */}
                        <Switch>
                          <Route path="/home" />
                          <Route path="/restaurent" />
                          <Route path="/menu" component={Menu}/>
                          <Route path="/order-online" />
                          <Route path="/team" component={Team} />
                          <Route path="/contact" component={Contact} />
                        </Switch>
                  </div>
                  </div>

            </div>
        {/* <div className="container-app">
          <div className="left-side">
            <SideBar />
          </div>
          <div className="right-side"> <Navbar></Navbar>
         
          <div className="wid">
            <Team/>
            
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
        </div> */}
      </div>
    );
  }
}
export default HomePage;