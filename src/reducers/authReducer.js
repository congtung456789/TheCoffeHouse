const initialState = {
    token: []
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case "SEND_FROM_FATHER":
        // console.log(action) => { type: 'SEND_FROM_FATHER', data: laptop }
        const laptopWithStickey = action.data + " stickey";
        return {
          items: [...state.items, laptopWithStickey]
        };
      default:
        return state;
    }
  }
    