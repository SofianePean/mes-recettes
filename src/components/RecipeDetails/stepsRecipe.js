import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StepsRecipe = ({ step, number }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.step}>{step}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    number: {
        marginRight: 7,
        backgroundColor: 'white',
        borderRadius: 30,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20
    },
    step : {
        flex: 1
    }
});

export default StepsRecipe;