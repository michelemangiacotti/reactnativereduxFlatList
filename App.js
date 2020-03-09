import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
// import axios from 'axios';
import configureStore from './store/configureStore';
import FlatListUsers from './screens/FlatListUsers';

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FlatListUsers />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
  containerFlat: {
    flex: 1
  },
});

