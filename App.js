import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { StyleSheet, Text, View } from 'react-native';

//Components
import Recipes from './src/components/Recipes';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Recipes />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
