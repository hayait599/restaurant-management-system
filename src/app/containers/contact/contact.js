import React ,{ Component }from 'react';

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
  componentWillMount(){
    
  }
  render(){
   return (
  <div className="">
     <h1>Contact</h1>
    <div className="slide">
      <img className="slideImg"  src={"./images/slides/"+this.state.imgI+".jpg"} alt="" />  
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
   </form> 

  </div>
);
  }
 }

export default contact;

