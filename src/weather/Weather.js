'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTemperature: 0
    };
  }
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?id=1905468&APPID=532d313d6a9ec4ea93eb89696983e369')
      .then((response) => response.text())
      .then((responseText) => {
        console.log(responseText);
        this.setState({
          currentTemperature: (JSON.parse(responseText).main.temp - 273.15).toFixed(2)
        })
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Current Temperature: {this.state.currentTemperature}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20
  }
});

export default Weather;
