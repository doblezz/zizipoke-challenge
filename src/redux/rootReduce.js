import { combineReducers } from 'redux';
import { itemReducer } from './ItemsPokemon/ItemsPokeReducer';
import { counterReducer } from './authReducer';
import { favoritePokemon } from './SetPokeFavorite/FavoriteReducers';


export const rootReducer = combineReducers({
    isLogged: counterReducer,
    itemsPoke: itemReducer,
    favoritePokemon: favoritePokemon,
    // ...otros reducers
});
