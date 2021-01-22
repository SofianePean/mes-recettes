import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const RecipesFound = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>A venir...</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25
    },
})

export default RecipesFound;