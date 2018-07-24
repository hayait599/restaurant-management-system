import React from 'react';
import { FoodItem } from '../../components';

import * as meals from '../../../app/models/items'
import './foodItems.css';
const foodItems = (props) => (
    <div className="foodItems">
        <ul className="list-group">
           
            {
                meals.map((res, i) => (
                    <FoodItem key={i} itemName={res.name} price={"$"+res.price} img={res.photoUrl}/>
                ))
            }
        </ul>
    </div>
);

export default foodItems;