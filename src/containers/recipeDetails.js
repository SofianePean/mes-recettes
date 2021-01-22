import { connect } from 'react-redux';

import { fetchRecipeDetails } from '../actions/recipeDetails'

import RecipeDetails from '../components/RecipeDetails';



const mapStateToProps = (state) => ({
    recipeDetails: state.recipeDetails.recipeDetails
    });
    
const mapDispatchToProps = (dispatch) => ({
    fetchRecipeDetails: (id) => {
        dispatch(fetchRecipeDetails(id))
    },
});
    
// Container
const RecipeDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecipeDetails);

// == Export
export default RecipeDetailsContainer;