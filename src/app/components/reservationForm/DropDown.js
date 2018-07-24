
import React, { Component } from 'react';
import './reservation.css'

class DropDown extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      dropdownTitle: this.props.title,
    }
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({ dropdownTitle: e.target.innerHTML })
  }
  renderItems() {
    const data = [
      "1 person",
      "2 people",
      "3 people",
      "4 people",
      "5 people",
      "6 people",
    ]
    return data.map((item, key) => {
      return (
        <a key={key} className="dropdown-item" href="#" onClick={this.handleClick.bind(this)}>{item}</a>
      );
    })
  }
  render() {
    return (
      <div className="dropdown">
        <button  className="custom-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
          <div className="dropdown-title " >
            {this.state.dropdownTitle}
            <i className="fa arrow">&#xf107;</i>
          </div>
        </button >
        <div className="dropdown-menu" >
          {this.renderItems()}
        </div>
      </div>
    );
  }

}
export default DropDown;
