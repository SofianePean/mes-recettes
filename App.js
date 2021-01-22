import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import Recipes from './src/containers/recipes';
import RecipeDetails from './src/components/RecipeDetails';
import RecipesFound from './src/components/RecipesFound';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Liste des recettes" component={Recipes} />
            <Stack.Screen name="Détails de la recette" component={RecipeDetails} />
            <Stack.Screen name="Recette trouvées" component={RecipesFound} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
