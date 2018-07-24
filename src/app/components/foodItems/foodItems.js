import React from 'react';
import { FoodItem } from '../../components';

import './foodItems.css';
const foodItems = (props) => (
    <div className="foodItems">
        <h1><p>foodItems</p></h1>
        <ul className="list-group">
            <FoodItem itemName="Fanta" price="$5.0"/>
            <FoodItem itemName="Meat" price="$5.0"/>
            <FoodItem itemName="Meat" price="$0.5"/>
            <FoodItem itemName="Meat" price="$0.5"/>
            <FoodItem itemName="Meat" price="$0.5"/>
            <FoodItem itemName="Meat" price="$0.5"/>
            <FoodItem itemName="Grell" price="$0.5"/>
        </ul>
    </div>
);

export default foodItems;