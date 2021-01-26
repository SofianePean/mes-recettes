import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Input, Button } from 'react-native-elements';

const Login = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/login.jpg')} style={styles.image}>
                <Input
                placeholder='Adresse mail'
                inputContainerStyle={styles.inputBorder}
                placeholderTextColor={'white'}
                />
                <Input
                placeholder="Mot de passe"
                secureTextEntry={true}
                inputContainerStyle={styles.inputBorder}
                placeholderTextColor={'white'}
                />
                <Button
                title="Se connecter"
                type="outline"
                buttonStyle={{ borderColor: 'white', borderWidth: 2}}
                titleStyle={{ color: 'white' }}
                containerStyle={{width: '80%', marginTop: 20}}
                />
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 22
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBorder: {
        borderBottomColor: 'white'
    },
})

export default Login