import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ingredients = ({name, quantity}) => {
    return(
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{quantity.amount} {quantity.unitLong}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom:5
    }
})

export default Ingredients;