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
    const timeData = [
      "1 person",
      "2 people",
      "3 people",
      "4 people",
      "5 people",
      "6 people",
    ]
    return (
      <div className="container">
        <div className="title"> RESERVATIONS </div>
        <div className="form-content">
          <br />
          <input className="custom-dropdown" type="date" name="bday" />
          <br />
          <input className="custom-dropdown" type="time" name="usr_time" />
          <br />
          <DropDown data={timeData} title={"Party size"} />
          <br />
          <button className="submit-button" type="button">Book Now</button>
        </div>
      </div>
    );
  }
}
export default Reservation;
