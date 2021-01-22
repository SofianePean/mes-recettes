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

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Liste des recettes" component={Recipes} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
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
