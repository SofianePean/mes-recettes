import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { StyleSheet, SafeAreaView } from 'react-native';


//Components
import AppNavigation from './src/navigation';




export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
