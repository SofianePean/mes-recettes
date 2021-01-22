import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Instruction = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.steps}>INSTRUCTIONS</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
        position: 'absolute',
        top: -30
    }
});

export default Instruction;

