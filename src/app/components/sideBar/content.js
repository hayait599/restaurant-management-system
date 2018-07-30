import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Reservation } from './../index';
import './sideBar.css'

class Content extends Component {
  render() {
    let { location } = this.props;
    location = location.pathname;
    switch (location) {
      case '/home':
        return (
          <div className="content-sidebar ">
            <div className="content-text-container">
              <h5>WELCOME </h5>
              <br />
              <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </div>
            </div>
            <br />
            <Reservation />
          </div>
        )
        // break;
      case '/restaurant':
        return (
          <div className="content-sidebar ">
            <div className="content-text-container">
              <h5>RESTAURANT </h5>
              <br />
              <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </div>
              <br />
              <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </div>
            </div>
          </div>
        )
      case '/order-online':
        return (
          <div />
        )
      case '/menu':
        return (
          <div className="content-sidebar ">
            <div className="content-text-container">
              <h5>MENU</h5>
              <br />
              <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </div>
              <br />
              <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </div>
            </div>
          </div>
        )
      case '/contact':
        return (
          <div />
        )
      case '/team':
        return (
          <div className="content-sidebar ">
            <div className="content-text-container">
              <h5>MEET THE TEAM</h5>
              <br />
              <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </div>
              <br />
              <div>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="content-sidebar " />
        )
    }
  }
}
export default withRouter(Content);