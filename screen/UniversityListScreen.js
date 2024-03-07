import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const UniversityListScreen = ({ navigateToScreen }) => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [error, setError] = useState(null);

  const fetchUniversities = async () => {
    try {
      if (!country) {
        throw new Error('Por favor, ingresa un país.');
      }

      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);

      if (!response.ok) {
        throw new Error('Error al obtener la lista de universidades.');
      }

      const data = await response.json();
      setUniversities(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching universities:', error.message);
      setUniversities([]);
      setError(error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Introducir país (en inglés)" value={country} onChangeText={setCountry} />
      <Button title="Obtener universidades" onPress={fetchUniversities} />

      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      {universities.length > 0 && (
        <ScrollView>
          {universities.map((university) => (
            <Text key={university.name}>
              {university.name} - {university.alpha_two_code} - {university.web_pages && university.web_pages.length > 0 ? university.web_pages[0] : 'N/A'}
            </Text>
          ))}
        </ScrollView>
      )}

      <Button title="Volver a Home" onPress={() => navigateToScreen('home')} />
    </View>
  );
};

export default UniversityListScreen;
