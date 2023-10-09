import { addToCart,increaseQuantity,decreaseQuantity } from "./Action";

const initialState={
    cartItems:[]
    
}

const cartReducer=(state=initialState,action)=>{
    switch (action.type){
        case addToCart:
            return{
                ...state,
                cartItems:[...state.cartItems,action.payload]
            }
            case increaseQuantity:
             
                return {
                  ...state,
                  cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload) {
                      return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                  })
                }
              case decreaseQuantity:
                return {
                  ...state,
                  cartItems: state.cartItems.map(item => {
                    if (item.id === action.payload && item.quantity > 1) {
                      return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                  })
                }
            default :
                return state;
    }
}

export default cartReducer;