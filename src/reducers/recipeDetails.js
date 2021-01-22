import { SAVE_RECIPE_DETAILS } from '../actions/recipeDetails'

const initialState = {
    recipeDetails: null
}

export const recipeDetails = (state = initialState, action = {}) => {
    switch(action.type) {
        case SAVE_RECIPE_DETAILS:
            return {
                ...state,
                recipeDetails: action.data
            }
        default:
           return state;
    }
}