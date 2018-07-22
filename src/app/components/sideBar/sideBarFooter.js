import React, { Component } from 'react';
import './sideBar.css'

class sideBarFooter extends Component {


  render() {
    return (
      <div className="side-bar-footer">
        <hr />
        <div className="footer-content">
          <div>500 Terry Francois Street</div>
          <div>SF , CA  94158</div>
          <div>Open everyday 2pm to 12am</div>
        </div>
        <div>
          icons
        </div>
        <div>
          text
        </div>
      </div>
    );
  }
}

export default sideBarFooter;