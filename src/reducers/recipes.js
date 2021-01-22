import { SAVE_RECIPES } from '../actions/recipes'

const initialState = {
    recipeList: null
}

export const recipes = (state = initialState, action = {}) => {
    switch(action.type) {
        case SAVE_RECIPES:
            return {
                ...state,
                recipeList: action.data
            }
        default:
           return state;
    }
}