import React, { Component } from 'react';
import { FoodItem } from '../../components';
import { connect } from 'react-redux'; 
import { getItems } from './../../actions';

import './foodItems.css';


class foodItems extends Component {

    componentDidMount = () => {
      this.props.getItems();
    }
    
        render() {
            const items = this.props.t
            var food;
            if(items.length >0 ){
                food = items;
            }
            
    return(

    <div className="foodItems">
        <ul>
        { food? 
                food.map((res, i) => (
                    <FoodItem key={i} item={res}/>
                ))
                : null
            }
        </ul>
    </div>
);
 }
}

const mapStateToProps = (state) =>{
    return {
        t: state.itemsState
    }
}

export default connect(mapStateToProps, { getItems }) (foodItems);