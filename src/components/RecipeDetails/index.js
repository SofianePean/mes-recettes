import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const RecipeDetails = ({route}) => {
    return(
        <View>
            <Text>Recette {route.params.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default RecipeDetails;