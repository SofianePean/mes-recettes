import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Recipe = ({title, readyInMinutes, servings, image, navigation}) => {

    const onPress = () => {
        navigation.navigate("Détails de la recette", {
            title: title
        })
    };
    return(
        <View>
            <TouchableOpacity number={0.9} style={styles.container} onPress={onPress}>
                <View>
                    <Image
                        style={styles.image}
                        source={{uri : 'https://spoonacular.com/recipeImages/' + image }}
                    />
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.info}>
                        <Text>Prêt en {readyInMinutes} minutes</Text>
                        <Text>Pour {servings} personnes</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft:10,
        marginTop: 5
    },
    image: {
        height:200,
        borderRadius:10,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
    }
})

export default Recipe;