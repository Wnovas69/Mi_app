import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const WeatherScreen = ({ navigateToScreen }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    
    const apiKey = 'abe6df65089a4ecfbad150552240503';

   
    const location = 'Santo Domingo';

    // Fetch weather API (WeatherAPI)
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&units=metric`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        console.log(data); // Agrega este log para verificar la estructura de los datos
        setWeather(data.current);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        // Handle error gracefully, e.g., display an error message to the user
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      {weather ? (
        <>
          <Text style={styles.locationText}>Santo Domingo</Text>
          <Text style={styles.temperatureText}>Temperatura: {weather.temp_c} °C</Text>
          <Text style={styles.feelsLikeText}>Sensación térmica: {weather.feelslike_c} °C</Text>
          {}
        </>
      ) : (
        <Text>Cargando el clima...</Text>
      )}
       <Button title="Volver a Home" onPress={() => navigateToScreen('home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperatureText: {
    fontSize: 16,
    marginBottom: 5,
  },
  feelsLikeText: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default WeatherScreen;



