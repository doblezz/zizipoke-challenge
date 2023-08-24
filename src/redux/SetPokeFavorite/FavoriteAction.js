// actions.js
export const addToFavorites = (pokemon) => ({
    type: 'ADD_TO_FAVORITES',
    payload: pokemon,
  });
  
  export const removeFromFavorites = (pokemonId) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: pokemonId,
  });