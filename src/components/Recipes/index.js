import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';

// Import components
import Recipe from './recipe';
import SearchBar from '../../containers/searchBar';
import { Button } from 'react-native-elements';

const Recipes = ({navigation, fetchRecipes, recipeList}) => {
    console.log('recipeList', recipeList)

    useEffect(() => {
        fetchRecipes()
    }, []);

    const renderItem = ({ item }) => (
        <Recipe
        title={item.title}
        readyInMinutes={item.readyInMinutes}
        servings={item.servings}
        image={item.image}
        navigation={navigation}
        id={item.id}
        />
      );

      const _renderSeparator = () => (
        <View style={{ height: 4, backgroundColor: '#94fbab', marginLeft: 80, marginBottom: 20}} />
      );

      const handleOnPress = () => {
        navigation.navigate('Recette trouvées')
        };

    return(
        <View style={styles.container}>
            <SearchBar />
            <Button
                title="Lancer la recherche"
                type="clear"
                onPress={handleOnPress}
                // containerStyle={{height:30}}
                buttonStyle={{height:20}}
                />
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
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: 10,
        paddingRight:10
    },
})

export default Recipes;