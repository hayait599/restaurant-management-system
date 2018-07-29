import React from 'react';
import { FoodItems, MyOrder } from '../../components'
import './order-online.css';
const orderOnline = (props) => (
    <div className="OrderOnline">
        <div className="foodItems">
             <FoodItems order="true"/>
        </div>  
        <div className="myOrder">
            <MyOrder/>
        </div>
    </div>
);

export default orderOnline;