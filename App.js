import React, { Component } from 'react';
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo';
import Weather from './Weather';

const API_KEY = 'a5b10d311935f8b64fc6254b83db6f2d';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 24,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24,
    color: 'white',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 40,
  },
});

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    city: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        this.setState({
          error,
        });
        console.log(error);
      },
    );
  }

  _getWeather = (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then(res => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true,
          city: json.name,
        });
      });
  };

  render() {
    const {
      isLoaded, error, temperature, name, city,
    } = this.state;
    return (
      <LinearGradient colors={['#00ECBC', '#007ADF']} style={styles.container}>
        <StatusBar hidden />
        {isLoaded ? (
          <Weather weatherName={name} city={city} temp={Math.floor(temperature - 273.15)} />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the awesome weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </LinearGradient>
    );
  }
}
