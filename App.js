import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import GenderPredictionScreen from './screen/GenderPredictionScreen';
import AgeDeterminationScreen from './screen/AgeDeterminationScreen';
import UniversityListScreen from './screen/UniversityListScreen';
import WeatherScreen from './screen/WeatherScreen';
import AboutScreen from './screen/AboutScreen';
import NewsScreen from './screen/NewsScreen';

const App = () => {
  const [screen, setScreen] = useState('home');

  const navigateToScreen = (screenName) => {
    setScreen(screenName);
  };

  return (
    <View style={styles.container}>
      {screen === 'home' && <HomeScreen navigateToScreen={navigateToScreen} />}
      {screen === 'gender' && <GenderPredictionScreen navigateToScreen={navigateToScreen} />}
      {screen === 'age' && <AgeDeterminationScreen navigateToScreen={navigateToScreen} />}
      {screen === 'universities' && <UniversityListScreen navigateToScreen={navigateToScreen} />}
      {screen === 'weather' && <WeatherScreen navigateToScreen={navigateToScreen} />}
      {screen === 'news' && <NewsScreen navigateToScreen={navigateToScreen} />}
      {screen === 'about' && <AboutScreen  navigateToScreen={navigateToScreen} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

