import { ADD_TO_CART, REMOVE_FROM_CART,INCREMENT_CART,DECREMENT_CART ,CLEAR_CART} from "./actions";


export function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
        const products = state.filter((item) => item.id !== product.id);
        return [...products, product];
      }
      action.payload.quantity = 1;
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);

    case CLEAR_CART:
      return [];

    case INCREMENT_CART:
     const products_Increment= state.map(item => {
        if (item.id === action.payload.id) {
          item.quantity++;
          
        }
        return item;
      });
      return products_Increment;

      case DECREMENT_CART:
       const products_decrement=state.map(item=>{
          if(item.id===action.payload.id){
            if(item.quantity>1){
               item.quantity--;
            }
           
          }
          return item
        })
        return products_decrement 

       default:
        return state;
  }
}
