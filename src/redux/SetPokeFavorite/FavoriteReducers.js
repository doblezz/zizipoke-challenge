// reducers.js
const initialState = {
    favoritePokemon: [],
  };
  
  export const favoritePokemon = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
        return {
          ...state,
          favoritePokemon: [...state.favoritePokemon, action.payload],
        };
      case 'REMOVE_FROM_FAVORITES':
        return {
          ...state,
          favoritePokemon: state.favoritePokemon.filter(pokemon => pokemon.data2.id !== action.payload),
        };
      default:
        return state;
    }
  };