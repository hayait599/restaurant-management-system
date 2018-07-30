import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import './myOrder.css';
class MyOrder extends Component {

        state = {
            order: []
        }
        componentWillMount =() => {
            // this.setState({order:this.state.order.concat(this.props.selected)});
           // console.log("willMount");
        }
        componentWillUpdate(){
            console.log("didMount");
        }
        componentWillReceiveProps(){
            console.log("WillReceiveProps");
                if(this.props.selected)
             this.setState({order:this.state.order.concat(this.props.selected)})
            
           
        }


    render () {
        console.log(this.state)
        return (
            <div className="MyOrder">
                <div className="downBorder">
                    <h4>My Order</h4>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-9 scroll">
                           {
                               this.state.order.map((data, index) => {
                                   if(data){

                                    return (
                                        <div key={index} className="row downBorder">
                                            <div className="col-9">
                                                 {data.name}
                                            </div>
                                            <div className="col-2">
                                                ${data.price}
                                            </div>
                                       </div>
                                        );
                                   }
                                   return <div></div>
                                  
                               })
                           }
                        </div>
                    </div>
                    <br/>
                    <div className="orderNow">Order Now</div>
                </div>
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

export default connect(mapStateToProps,null) (MyOrder);