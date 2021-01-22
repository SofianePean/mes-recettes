export const FETCH_RECIPE_DETAILS = 'FETCH_RECIPE_DETAILS';
export const SAVE_RECIPE_DETAILS = 'SAVE_RECIPE_DETAILS'

export const fetchRecipeDetails = (id) => ({
    type: FETCH_RECIPE_DETAILS,
    id
});

export const saveRecipeDetails = (data) => ({
    type: SAVE_RECIPE_DETAILS,
    data
});