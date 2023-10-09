import React, { Component } from 'react'
import store from "../../utils/logo/store.png"
import cart from "../../utils/logo/cart.png"
import "./Header.style.scss"
import { connect } from 'react-redux'
import Cart from '../cart/Cart.component'
import Api from '../productLists/Api'
import { Link } from 'react-router-dom'


class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cartVisible: false,
    }
  }

  handleCartIconClick = () => {
    this.setState(prevState => ({
      cartVisible: !prevState.cartVisible
    }));
  }
  render() {
    return (
      <>
        <header>
          <div className='navBar'>
            <div className='img'>
              <img src={store} alt="Ecommerce Logo" />
            </div>

            <div className='txt'>
              <h2>E-<i>Mart</i></h2>
            </div>
            <div className='items'>
              <div className='login'>
                <Link to="/login"><button>Login</button></Link>
              </div>
              <img src={cart} alt="Cart Image" onClick={this.handleCartIconClick} />
              <span>{this.props.cartItemCount}</span>
            </div>
          </div>

        </header>
        {this.state.cartVisible && <Cart cartItems={this.props.cartItems} />}
        <Api />
      </>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartItemCount: state.cart.cartItems.length,
    cartItems: state.cart.cartItems,
  }
}

export default connect(mapStateToProps)(HeaderComponent);





