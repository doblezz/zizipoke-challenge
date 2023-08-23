import { combineReducers } from 'redux';
import { itemReducer } from './ItemsPokemon/ItemsPokeReducer';
import { counterReducer } from './authReducer';


export const rootReducer = combineReducers({
    isLogged: counterReducer,
    itemsPoke: itemReducer,
    // ...otros reducers
});
