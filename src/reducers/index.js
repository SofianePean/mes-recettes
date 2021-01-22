import {combineReducers} from 'redux';

// Import des reducers
import { recipes } from './recipes';
import { searchBar } from './searchBar';

export default combineReducers({
    recipes,
    searchBar
})