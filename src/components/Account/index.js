import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Account = () => {
    return(
        <View style={styles.container}>
            <Text>Account</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    }
})

export default Account;