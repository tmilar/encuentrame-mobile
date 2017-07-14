import React, {Component} from 'react'
import {Text, View, StyleSheet, Button, Alert, TextInput, ScrollView} from 'react-native'
import Feed from "../component/Feed";
import {news, users} from "../config/data";

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        {/* TODO add styles.container for scroll view?*/}
        <Text style={styles.paragraph}>
          Bienvenido al Home!
        </Text>
        <Feed users={users} news={news}>
        </Feed>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#34495e'
  }
});
