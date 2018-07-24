import React, { Component } from 'react';
import DropDown from './dropDown';
import './reservation.css'

class Reservation extends Component {

  renderContent() {
    return (
      <div />
    );
  }
  render() {
    return (
      <div className="container">
        <div className="title"> RESERVATIONS </div>
        <div className="form-content">
          <DropDown title={"Party size"} />
 
        </div>
      </div>
    );
  }
}

export default Reservation;