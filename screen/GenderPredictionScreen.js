import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GenderPredictionScreen = ({ navigateToScreen }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);
  const [error, setError] = useState(null);

  const predictGender = async () => {
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      if (!response.ok) {
        throw new Error('Failed to fetch gender prediction');
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (data.gender) {
        setGender(data.gender);
        setError(null); // Clear previous errors if successful
      } else {
        setGender(null);
        setError('Género no predicho para el nombre proporcionado.');
      }
    } catch (error) {
      console.error('Error fetching gender prediction:', error);
      setGender(null);
      setError('Error al predecir el género');
    }
  };

  return (
    <View>
      <TextInput placeholder="Introducir nombre" value={name} onChangeText={setName} />
      <Button title="Predecir género" onPress={predictGender} />
      {gender && (
        <>
          {gender === 'male' && <View style={{ backgroundColor: 'blue', height: 50, width: 50 }} />}
          {gender === 'female' && <View style={{ backgroundColor: 'pink', height: 50, width: 50 }} />}
        </>
      )}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Volver a Home" onPress={() => navigateToScreen('home')} style={styles.homeButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
});

export default GenderPredictionScreen;






