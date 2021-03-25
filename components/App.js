/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Header from './Header';
import GameBoard from './GameBoard';

const {height} = Dimensions.get('screen');
export default class App extends Component {
  constructor() {
    super();
    this.state = {gameStarted: false};
  }

  startGame() {
    this.setState({gameStarted: true});
  }

  render() {
    const {gameStarted} = this.state;
    return (
      <View style={styles.container}>
        <Header />
        {gameStarted ? (
          <GameBoard />
        ) : (
          <View
            style={{
              marginTop: '20%',
            }}>
            <Text style={styles.welcome}>Welcome to the game!</Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                marginTop: '15%',
                borderRadius: 10,
              }}
              onPress={() => this.startGame()}>
              <Text style={styles.instructions}>TOUCH HERE TO START AGAIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: height * 0.045,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    fontSize: height * 0.02,
    padding: 12,
    fontWeight: 'bold',
  },
});
