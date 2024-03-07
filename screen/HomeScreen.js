import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';

const HomeScreen = ({ navigateToScreen }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );

    return () => backHandler.remove();
  }, []);

  const handleBackPress = () => {
    BackHandler.exitApp();
    return true; // Evita el comportamiento predeterminado de retroceso
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a la Aplicación!</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('gender')}>
        <Text style={styles.buttonText}>Predicción de Género</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('age')}>
        <Text style={styles.buttonText}>Determinación de la Edad</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('universities')}>
        <Text style={styles.buttonText}>Lista de Universidades</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('weather')}>
        <Text style={styles.buttonText}>Clima en RD</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('news')}>
        <Text style={styles.buttonText}>Noticias de WordPress</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('about')}>
        <Text style={styles.buttonText}>Acerca de</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exitButton} onPress={handleBackPress}>
        <Text style={styles.buttonText}>Salir de la App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  exitButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;

