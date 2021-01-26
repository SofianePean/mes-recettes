import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

const Home = ({ navigation }) => {

    const onPress = () => {
        navigation.navigate("Liste des recettes")
    }

    const theme = {
        Button: {
          titleStyle: {
            color: 'red',
          },
        },
      };

    return(
        // <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/home.jpg')} style={styles.image}>

            <Button
            onPress={onPress}
            title="Voir les recettes"
            type="outline"
            buttonStyle={{borderColor: 'white', borderWidth: 2}}
            titleStyle={{ color: 'white' }}
            containerStyle={{width: '80%', position: 'absolute', bottom: 20}}
            />
            </ImageBackground>
        </View>
        // </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Platform.OS === 'android' ? 25 : 0,
        // flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Home;