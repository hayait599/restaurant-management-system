import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import './myOrder.css';
class MyOrder extends Component {

        state = {
            order: []
        }
        componentDidMount =() => {
            this.setState({order:this.state.order.concat(this.props.selected)});
        }


    render () {
        var order=""
        if(this.props.selected){
            console.log(this.props.selected);
            order=this.props.selected.name;
        }
        
        return (
            <div className="MyOrder">
                <div className="downBorder">
                    <h4>My Order</h4>
                </div>
                <div className="downBorder">
                 {order}
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