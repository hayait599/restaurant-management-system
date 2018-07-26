import React ,{ Component }from 'react';
import * as FontAwesome from 'react-icons/lib/fa'

import './contact.css';

class contact extends Component {
  
 state = {
    imgI:1,
    interval:null
  }
  increaseIHandler = () => {
    if(this.state.imgI>3){
      this.setState({imgI:1});       
     }
     else{
     this.setState({imgI: this.state.imgI+1});
     }
    
  }
  decreaseHandler = () => {
    if(this.state.imgI <= 1){
      this.setState({imgI:4});
    }
    else{
      this.setState({imgI: this.state.imgI-1});
      }
  }
  componentDidMount = () => {
    setInterval(this.increaseIHandler, 3000);
    
  }
  render(){
   return (
  <div className="">
    {/* <h1>Contact</h1>
    <div className="slide">
      <img className="slideImg"  src={"./images/slides/"+this.state.imgI+".jpg"} alt="" />  
      <div className="row">
          <div onClick={this.increaseIHandler.bind(this)} className=" center col-sm">
          <h1><FontAwesome.FaAngleLeft/></h1> 
          </div>
          <div onClick={this.decreaseHandler.bind(this)}  className=" center col-sm">
          <h1><FontAwesome.FaAngleRight/></h1> 
          </div>
      </div>
    </div>
  <hr/>
    <form >
      <div>
        <div className="form-group">
          <input className="inputContact" type="text" name="name" placeholder="Name *"/>
        </div>
        <div className="form-group">
          <input className="inputContact" type="email" name="email" placeholder="Email *"/>
        </div>
        <div className="form-group">
          <input className="inputContact" type="email" name="subject" placeholder="Subject"/>
        </div>
        <div className="form-group">
          <textarea  className="inputContact" rows="9" cols="30" name="message" placeholder="Message"/>
        </div>
        <div className="submitButton">
          <input className="inputContact" type="submit" value="Submit" />
        </div>
      </div>
   </form> */}

  </div>
);
  }
 }

export default contact;

