import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa'
import './sideBar.css'

class sideBarFooter extends Component {

  render() {
    return (
      <div className="side-bar-footer">
        <hr />
        <div className="footer-content">
          <div className="footer-content-text"> 500 Terry Francois Street</div>
          <div className="footer-content-text">SF , CA  94158</div>
          <div className="footer-content-text">Open everyday 2pm to 12am</div>
        </div>
        <div className="footer-icons">
          <FontAwesome.FaFacebook color={"#EAEAEA"} />
          <FontAwesome.FaInstagram color={"#EAEAEA"} />
          <FontAwesome.FaLinkedin color={"#EAEAEA"} />
          <FontAwesome.FaSnapchat color={"#EAEAEA"} />
        </div>
      </div>
    );
  }
}
export default sideBarFooter;