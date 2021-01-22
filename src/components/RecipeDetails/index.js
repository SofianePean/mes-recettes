import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

// Import components
import Instruction from './instruction';


const RecipeDetails = ({route, fetchRecipeDetails, recipeDetails}) => {
    console.log('RECIPEDETAIL', recipeDetails)

    useEffect(() =>  {
        fetchRecipeDetails(route.params.id)
    }, [])

    return(
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={{uri : 'https://spoonacular.com/recipeImages/' + route.params.image }}
            blurRadius={.3}
            />
            <View style={styles.instructions}>
            <Instruction />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    image: {
        height: 300
    },
    instructions: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default RecipeDetails;