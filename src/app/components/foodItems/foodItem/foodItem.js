import React from 'react';

import './foodItem.css';
const foodItem = (props) => {
    var string = "";
    var x = 120-(props.itemName.length+props.price.length);
    for(var i=0;i<x;i++){
        string+='-';
    }
    // console.log(string.length+(120-x));
   return <li className="item list-group-item">
        { props.itemName +" "}
        { string +" "} 
        { props.price }

    </li>
    
};
/*

{props.itemName+ "  "}  
 {props.price}$
*/
export default foodItem;