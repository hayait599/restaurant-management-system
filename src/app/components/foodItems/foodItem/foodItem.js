import React from 'react';

import './foodItem.css';
const foodItem = (props) => {
   
  
   return (
        <li className="item list-group-item">
                <div className="row">
                    <div className="col-4 img">
                        <img className="itemImg" src={props.img} alt=""></img>
                    </div>
                    <div className="col-sm info">
                        { props.itemName +" "}
                        <br/>  
                        { props.price }
                    </div>
                </div>
        </li>
   );
    
};



export default foodItem;