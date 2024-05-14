import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { WishlistContext } from '../context/WishlistContext';
import Header from '../components/Header';
import AddToListButton from '../components/AddToListButton';
import { showMessage } from 'react-native-flash-message';

const DetailPlanetScreen = ({ route, navigation }) => {
  const { planet } = route.params;
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToWishlist = () => {
    addToWishlist(planet);
    showMessage({
      message: "Added to Wishlist",
      description: `${planet.name} has been added to your wishlist.`,
      type: "success",
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Detail Planet" navigation={navigation} />
      <ScrollView style={styles.card}>
        <Text style={styles.cardTitle}>Planet Detail</Text>
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>Name: {planet.name}</Text>
          <Text style={styles.cardText}>Rotation Period: {planet.rotation_period}</Text>
          <Text style={styles.cardText}>Orbital Period: {planet.orbital_period}</Text>
          <Text style={styles.cardText}>Diameter: {planet.diameter}</Text>
          <Text style={styles.cardText}>Climate: {planet.climate}</Text>
          <Text style={styles.cardText}>Gravity: {planet.gravity}</Text>
          <Text style={styles.cardText}>Terrain: {planet.terrain}</Text>
          <Text style={styles.cardText}>Surface Water: {planet.surface_water}%</Text>
          <Text style={styles.cardText}>Population: {planet.population}</Text>
          <Text style={styles.cardText}>Created: {new Date(planet.created).toLocaleDateString()}</Text>
          <Text style={styles.cardText}>Edited: {new Date(planet.edited).toLocaleDateString()}</Text>
        </View>
        <View style={styles.cardButtonContainer}>
          <AddToListButton color={"#660072"} onPress={handleAddToWishlist} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Lato-Regular',
  },
  cardContent: {
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontFamily: 'Lato-Light',
    marginBottom: 5,
    backgroundColor: '#f7f8fa',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  cardButtonContainer: {
    alignItems: 'center', // Center the button horizontally
  },
});

export default DetailPlanetScreen;
