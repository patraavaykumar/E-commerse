// import React, { Component } from 'react'
// import { decreaseQuantity,increaseQuantity } from '../../store/Action';
// import { connect } from 'react-redux';
// import "./cart.style.scss"
// import { Link } from 'react-router-dom';

//  class Cart extends Component {
//   handleDecreaseQuantity = (item) => {
//     console.log('Quantity before increase:', item.quantity);
//     this.props.decreaseQuantity(item.id);
//   }

//   handleIncreaseQuantity = (item) => {
//     console.log('Quantity before increase:', item.quantity);
//     this.props.increaseQuantity(item.id);
//   }
//   render() {
//     const { cartItems } = this.props;
//     return (
//       <>
//       {cartItems.length >0 ?(
//         <div className="cart-container">
//         {Array.isArray(cartItems) && cartItems.map(item => (
//           <div className="cart-item" key={item.id}>
//             <div className='image'>
//               <img src={item.image} alt={item.title} />
//             </div>
//             <div className='itemDetail'>
//               <h5>{item.title}</h5>
//               <p>Price: {item.price}</p>
//               <button onClick={() => this.handleDecreaseQuantity(item)}>- </button>
//               <span> {item.quantity}</span>
//               <button onClick={() => this.handleIncreaseQuantity(item)}> +</button>
//             </div>
//           </div>
//         ))}
//         <Link to="/buyItems"><button className='btn'>Proceed to Buy</button></Link>
//       </div>
//       ):(<div className='emptyCart'>
//         <p>Cart is empty</p>
//       </div>)}

//     </>
//     )
//   }
// }

// const mapStateToProps=(state)=>{
//   return{
//     cartItems:state.cart.cartItems,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseQuantity: (itemId) => dispatch(increaseQuantity(itemId)),
//     decreaseQuantity: (itemId) => dispatch(decreaseQuantity(itemId)),
//   };
// };


// export default connect(mapStateToProps,mapDispatchToProps)(Cart);







import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cart.style.scss';

export default class Cart extends Component {
 
  handleIncreaseQuantity = (item) => {
    console.log("handleIncreaseQuantity called with item:", item);
        
      }


  render() {
    const { cartItems, handleDecreaseQuantity,  handleIncreaseQuantity}=this.props
   
    return (
  <>
  <div className="cart-container">
      {Array.isArray(cartItems) && cartItems.map(item => (
        <div className="cart-item" key={item.id}>
          <div className='image'>
            <img src={item.image} alt={item.title} />
          </div>
          <div className='itemDetail'>
            <h5>{item.title}</h5>
            <p>Price: {item.price}</p>
            <button onClick={() => handleDecreaseQuantity(item)}>- </button>
            <span> {item.quantity}</span>
            <button onClick={() => handleIncreaseQuantity(item)}> +</button>
          </div>
        </div>
      ))}
      <Link to="/buyItems"><button className='btn'>Proceed to Buy</button></Link>
    </div>

  </>
    )
  }
}

