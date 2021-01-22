import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, FlatList} from 'react-native';

// Import components
import Recipe from './recipe'

const Recipes = ({navigation, fetchRecipes, recipeList}) => {
    console.log('recipesLIST !!',recipeList)

    useEffect(() => {
        // fetchRecipes()
    }, []);

    const renderItem = ({ item }) => (
        <Recipe
        title={item.title}
        readyInMinutes={item.readyInMinutes}
        servings={item.servings}
        image={item.image}
        />
      );

      const _renderSeparator = () => (
        <View style={{ height: 4, backgroundColor: '#94fbab', marginLeft: 80, marginBottom: 20}} />
      )

    return(
        <View style={styles.container}>
            {recipeList ? 
            <FlatList
            data={recipeList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={_renderSeparator}
            />
            :
            <Text>Désolé, un prolème est survenu</Text>
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: 10,
        paddingRight:10
    }
})

export default Recipes;