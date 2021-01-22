import axios from 'axios';
import { FETCH_RECIPE_DETAILS, saveRecipeDetails} from '../actions/recipeDetails';

import { baseURL } from '../api/recipes';

const recipeDetailsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPE_DETAILS:
        const apiKey = "c5732edde621422697924d22275dd5ee";
      axios.get(`${baseURL}/${action.id}/information`, {
          params: {
            apiKey,
          }
      })
        .then((result) => {
            console.log(result)
          store.dispatch(saveRecipeDetails(result.data));
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
  export default recipeDetailsMiddleware;