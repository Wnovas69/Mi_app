import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking,Button } from 'react-native';

const NewsScreen = ({ navigateToScreen }) => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    // Reemplaza 'https://usainbolt.com' con la URL de tu sitio WordPress
    const wordpressSiteUrl = 'https://usainbolt.com';
    const apiEndpoint = `${wordpressSiteUrl}/wp-json/wp/v2/posts`;

    // Obtener las últimas 3 publicaciones
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setLatestPosts(data);
      })
      .catch((error) => console.error('Error fetching latest posts:', error));
  }, []);

  const openOriginalPost = (url) => {
    Linking.openURL(url);
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity style={styles.postContainer} onPress={() => openOriginalPost(item.link)}>
      <Text style={styles.postTitle}>{item.title.rendered}</Text>
      <Text style={styles.postExcerpt}>{item.excerpt.rendered.replace(/<[^>]*>/g, '')}</Text>
      <Text style={styles.visitLink}>Leer más</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={latestPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
      />

    <Button title="Volver a Home" onPress={() => navigateToScreen('home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postExcerpt: {
    marginTop: 5,
  },
  visitLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});

export default NewsScreen;

