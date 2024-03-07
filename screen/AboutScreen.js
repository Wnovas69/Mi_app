import React from 'react';
import { View, Text, Image, StyleSheet,Button } from 'react-native';

const AboutScreen = ({ navigateToScreen }) => {
  return (
    <View style={styles.container}>
       <Image source={require('../assets/perfil.png')} style={styles.profileImage} />
      <Text style={styles.name}>Wesley Jones Novas Mercedes</Text>
      <Text style={styles.email}>Wnovas69@gmail.com</Text>
      <Text style={styles.bio}>
        Soy un desarrollador apasionado que disfruta creando aplicaciones increíbles. 
        ¡Contáctame para oportunidades de trabajo emocionantes!
      </Text>
      <Button title="Volver a Home" onPress={() => navigateToScreen('home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  bio: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 18,
  },
});

export default AboutScreen;
