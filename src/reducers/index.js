import {combineReducers} from 'redux';

// Import des reducers
import { recipes } from './recipes';
import { searchBar } from './searchBar';
import { recipeDetails } from './recipeDetails'

export default combineReducers({
    recipes,
    searchBar,
    recipeDetails
})