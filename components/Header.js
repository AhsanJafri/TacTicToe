/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');
export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tic Tac Toe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    height: height / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: height * 0.07,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'serif',
  },
});
