import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Constants} from 'expo';
import Login from './login';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
