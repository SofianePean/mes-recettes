import { connect } from 'react-redux';

import { fetchRecipes } from '../actions/recipes'

import Recipes from '../components/Recipes';



const mapStateToProps = (state) => ({
    recipeList: state.recipes.recipeList
    });
    
const mapDispatchToProps = (dispatch) => ({
    fetchRecipes: () => {
        dispatch(fetchRecipes() )
    },
});
    
// Container
const RecipesContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Recipes);

// == Export
export default RecipesContainer;