import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  city: {
    fontSize: 48,
    color: 'white',
    marginTop: 100,
    marginBottom: 20,
  },
  temp: {
    fontSize: 48,
    color: 'white',
    marginTop: 20,
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 40,
  },
});

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: 'Rain',
    subtitle: 'Look at the outside',
    icon: 'weather-rainy',
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: 'Sunny',
    subtitle: 'Have a nice day!',
    icon: 'weather-sunny',
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: 'Thunderstorm',
    subtitle: 'Stay in the house',
    icon: 'weather-lightning',
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: 'It is a dull day',
    icon: 'weather-cloudy',
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6EC'],
    title: 'Snow',
    subtitle: 'Do you wanna build the snowman?',
    icon: 'weather-snowy',
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: 'Take an umbrella',
    icon: 'weather-hail',
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Haze',
    subtitle: 'Be careful on the road',
    icon: 'weather-hail',
  },
  Mist: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Mist',
    subtitle: 'Be careful on the road',
    icon: 'weather-fog',
  },
};

// export default class Weather extends Component {
//   render() {
//     return (
//       <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//         <View style={styles.upper}>
//           <Ionicons color="white" size={144} name="ios-rainy" />
//           <Text style={styles.temp}>35℃</Text>
//         </View>
//         <View style={styles.lower}>
//           <Text style={styles.title}>Raining like a MF</Text>
//           <Text style={styles.subtitle}>For more info look outside</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

function Weather({ weatherName, temp, city }) {
  return (
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <Text style={styles.city}>{city}</Text>
        <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>
          {temp}
℃
        </Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};
export default Weather;
