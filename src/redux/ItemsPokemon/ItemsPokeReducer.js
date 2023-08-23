const initialState = {
    items: [],
  };
  
  export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ITEMS':
        return { ...state, items: action.payload };
      default:
        return state;
    }
  };
  