import { createStore, compose, applyMiddleware } from 'redux';

// Import middlewares
import rootReducers from '../reducers'
import RecipesMiddleware from '../middlewares/recipesMiddleware';
import recipeDetailsMiddleware from '../middlewares/recipeDetailsMiddleware'

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        RecipesMiddleware,
        recipeDetailsMiddleware
    ),
  );

const store = createStore(
    rootReducers,
    enhancers
    );

export default store;