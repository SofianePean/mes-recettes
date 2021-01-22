import { createStore, compose, applyMiddleware } from 'redux';

// Import middlewares
import rootReducers from '../reducers'
import RecipesMiddleware from '../middlewares/recipesMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        RecipesMiddleware
    ),
  );

const store = createStore(
    rootReducers,
    enhancers
    );

export default store;