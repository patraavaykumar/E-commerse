export const addToCart = (product) => {
  return {
    type: addToCart,
    payload: product,
  }
}

export const increaseQuantity = (itemId) => {
  
  return {
    type: increaseQuantity,
    payload:itemId,
  };
};

export const decreaseQuantity = (itemId) => {
  return {
    type: decreaseQuantity,
    payload:itemId,
  };
};