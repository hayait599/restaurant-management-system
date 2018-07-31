import React, { Component } from 'react';
import { FoodItem } from '../../components';
import { connect } from 'react-redux'; 
import { getItems, storeSelectedItem} from './../../actions';

import './foodItems.css';


class foodItems extends Component {
    componentDidMount (){
       
        this.props.getItems();
    }
    getItemHandler(i) {
     var id =  Math.floor(Math.random() * 9999);
    var data = {
         id: id,
         item: this.props.t[i]
     }
    //  console.log(data);
      this.props.storeSelectedItem(data);

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
                food.map((res, index) => {
                   return <FoodItem key={index} item={res} order={this.props.order} click={() => this.getItemHandler(index)}/>
                }
                )
                : null
            }
        </ul>
    </div>
);
 }
}

const mapStateToProps = (state) =>{
    return {
        t: state.itemsState,
        selected: state.selectedItem
    }
}

export default connect(mapStateToProps, { getItems, storeSelectedItem  }) (foodItems);