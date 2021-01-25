import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';

// Import components
import Instruction from './instruction';


const RecipeDetails = ({route, fetchRecipeDetails, recipeDetails}) => {
    console.log('RECIPEDETAIL', recipeDetails)

    useEffect(() =>  {
        fetchRecipeDetails(route.params.id)
    }, [])

    return(
        <ScrollView >
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{uri : 'https://spoonacular.com/recipeImages/' + route.params.image }}>
                </ImageBackground>
                <View style={styles.instructions}>
                    {recipeDetails &&
                        <Instruction
                        title={recipeDetails.title}
                        ingredients={recipeDetails.extendedIngredients}
                        steps={recipeDetails.analyzedInstructions[0] ? recipeDetails.analyzedInstructions[0].steps : recipeDetails.analyzedInstructions[0]}
                        />
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        flex: 1,
        height: 300
    },
    instructions: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default RecipeDetails;