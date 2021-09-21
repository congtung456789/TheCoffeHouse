const initialState = {
    products: []
  };
  
  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_CART":
        const productIndex = state.products?.findIndex(e =>e._id === action.data?._id)
        if(productIndex === -1)
        {
           return {
              products: [...state.products, action.data]
            };
        }else
        {
          state.products[productIndex].quantity += 1
          return{
            products: [...state.products]
          }
        }
       case"CHANGE_QUANTITY":
        const isReduce = action.changeQuantityType === 'reduce'
        const productChangeQuantity = state.products?.map(e => e._id === action.data._id ? ({...e, quantity: isReduce ? (e.quantity -1) : (e.quantity + 1)}) : e)
        return{
          ...state,
          products : productChangeQuantity
        };
        case "REMOVE_ITEM":
          return{
            products : state.products?.filter(e => e?._id !== action.data?._id)
          }
        case "REMOVE_ALL":
          return{
            products : []
          }
      default:
        return state;
    }
  }
  