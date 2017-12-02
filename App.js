import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './src/reducers'

// import StartUpNavigation from './src/util/startupNavigation'
import { CharacterListContainer } from './src/features/'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <CharacterListContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
