import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { deleteSelectedItem, getItems } from './../../actions';

import './myOrder.css';
class MyOrder extends Component {

       
    
   deleteSelectedItemHandler = (data) => {
    // console.log("delete", data);
        this.props.deleteSelectedItem(data);
        this.props.getItems();
        // this.props.getTotalPrice();
   }



    render () {
      var selectedItems = this.props.selected;
        return (
            <div className="MyOrder">
                <div className="downBorder">
                    <h4>My Order</h4>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-9 scroll">
                           {
                               
                               selectedItems.map((data,index) => {                                    
                                   return (
                                       <div className="row downBorder"  key={index}>
                                        <div className="col-8">
                                            {data.item.name}
                                        </div>
                                        <div className="col-3">
                                            ${data.item.price}
                                        </div>
                                        <div className="col-1 delete" onClick={this.deleteSelectedItemHandler.bind(this,data)}>
                                            delete
                                        </div>
                                                                                  
                                       </div>
                                   );
                               })
                           }
                        </div>
                    </div>
                    <br/>
                    Total Price: ${ this.props.totalPrice ? this.props.totalPrice : null }
                    <div className="orderNow">Order Now</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        t: state.itemsState,
        selected: state.selectedItem,
        totalPrice: state.totalPrice
      
    }
}

export default connect(mapStateToProps,{ deleteSelectedItem, getItems }) (MyOrder);