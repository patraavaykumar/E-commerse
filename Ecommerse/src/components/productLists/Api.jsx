import React, { Component } from 'react';
import axios from 'axios';
import './Api.style.scss';
import { connect } from 'react-redux';
import { addToCart } from '../../store/Action';

class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        if (Array.isArray(response.data)) {
          this.setState({
            data: response.data,
            loading: false
          });
        } else {
          throw new Error("Data is not in the expected format");
        }
      })
      .catch(err => {
        this.setState({
          error: err,
          loading: false
        });
      });
  }


  addToCart = (item) => {
    this.props.addToCart({...item,quantity:1});
    console.log(`Added ${item.title} to cart`);
    const { image, title, price } = item;
    console.log(`Product Image: ${image}`);
    console.log(`Product Title: ${title}`);
    console.log(`Product Price: ${price}`);
  }

  render() {
    const { data, loading, error } = this.state;
    return (
      <div className="products-container">
        <h1>Display Items</h1>
        {loading && <div>Loading ....</div>}
        {error && <div>Error : {error.message}</div>}
        {data && (
          <div className="products">
            {data.map(item => (
              <div className="product" key={item.id}>
                <div className='image'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='itemDetail'>
                  <h5>{item.title}</h5>
                  <p>{item.price}</p>
                  <button onClick={() => this.addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    );
  }
}
const mapStateToProps = (state) => ({
    data: state.data,
});
const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Api)
