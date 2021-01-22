import axios from 'axios';
import { FETCH_RECIPES, saveRecipes} from '../actions/recipes';

import { baseURL } from '../api/recipes';

const RecipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES:
        const apiKey = "c5732edde621422697924d22275dd5ee";
        const nbPerPage = 30
      axios.get(`${baseURL}`, {
          params: {
            apiKey,
            number: nbPerPage
          }
      })
        .then((result) => {
          store.dispatch(saveRecipes(result.data.results));
        })
        .catch((error) => {
          console.log('ERROR',error)
        })
      next(action);
      break;
    default:
      next(action);
      break;
  }
  };
  export default RecipesMiddleware;