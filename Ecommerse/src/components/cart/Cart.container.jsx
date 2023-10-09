import React, { Component } from 'react';
import { decreaseQuantity, increaseQuantity, } from '../../store/Action';
import { connect } from 'react-redux';
import Cart from './Cart.component';

class CartContainer extends Component {
 

 
  handleDecreaseQuantity = (item) => {
    console.log("handleDecreaseQuantity called with item:", item);
      this.props.decreaseQuantity(item.id);
    }

    handleIncreaseQuantity = (item) => {
  console.log("handleIncreaseQuantity called with item:", item);
      this.props.increaseQuantity(item.id);
    }

  
  
  render() {
    console.log('Props in CartContainer:', this.props);
    return (
      <Cart 
        cartItems={this.props.cartItems}
        handleDecreaseQuantity={this.handleDecreaseQuantity}
        handleIncreaseQuantity={this. handleIncreaseQuantity}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseQuantity: (itemId) => dispatch(increaseQuantity(itemId)),
    decreaseQuantity: (itemId) => dispatch(decreaseQuantity(itemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
