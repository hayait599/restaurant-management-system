import React from 'react';

import './foodItem.css';
const foodItem = (props) => {
    var cssHover="hoverItem";
    var click;
   if(props.order === "true"){
       cssHover="item list-group-item hoverItem";
       click = props.click
   }
   else{
    cssHover="item list-group-item";
    click = null;
   }
   return (
       
    <li className={cssHover} onClick={click}>
    <div className="row">
        <div className="col-3 img">
            <img className="itemImg" src={props.item.photoUrl} alt=""></img>
        </div>
        <div className="col-sm info">
            { props.item.name +" "}
            <br/>  
            ${ props.item.price }
        </div>
    </div>
</li>
   );
    
};



export default foodItem;