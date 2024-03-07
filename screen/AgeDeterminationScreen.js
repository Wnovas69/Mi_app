import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AgeDeterminationScreen = ({ navigateToScreen }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  const determineAge = async () => {
    // Fetch age estimation API (replace with desired API)
    const response = await fetch(`https://api.agify.io/?name=${name}`);
    const data = await response.json();
    setAge(data.age);
  };

  return (
    <View>
      <TextInput placeholder="Introducir nombre" value={name} onChangeText={setName} />
      <Button title="Determinar edad" onPress={determineAge} />
      {age && (
        <View>
          <Text>Edad: {age}</Text>
          {age < 18 && <Text>Joven</Text>}
          {age >= 18 && age < 65 && <Text>Adulto</Text>}
          {age >= 65 && <Text>Anciano</Text>}
        </View>
      )}
      <Button title="Volver a Home" onPress={() => navigateToScreen('home')} />
    </View>
  );
};

export default AgeDeterminationScreen;
