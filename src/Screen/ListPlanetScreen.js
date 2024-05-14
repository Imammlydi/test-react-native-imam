import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import Button1 from '../components/Button1';
import HeaderMain from '../components/HeaderMain';

const ListPlanetScreen = ({ navigation }) => {

  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    if (isFetchingMore) {
      fetchPlanets();
    }
  }, [isFetchingMore]);

  const fetchPlanets = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
      const data = await response.json();
      setPlanets((prevPlanets) => [...prevPlanets, ...data.results]);
      setLoading(false);
      setIsFetchingMore(false);
    } catch (error) {
      console.error('Error fetching planets: ', error);
      setLoading(false);
      setIsFetchingMore(false);
    }
  };

  const fetchMorePlanets = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const navigateToDetail = (planet) => {
    if (planet.name && planet.climate && planet.population) {
      navigation.navigate('DetailPlanet', { planet });
    } else {
      console.warn('Data planet tidak lengkap:', planet);
    }
  };



  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <>
      <HeaderMain title="List Planet" navigation={navigation} />
      <View style={styles.container}>
        <FlatList
          data={planets}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardContainer} >
              <View style={{ height: 15 }} />
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardText}>Climate: {item.climate}</Text>
                <Text style={styles.cardText}>Population: {item.population}</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                  <View></View>
                  <Button1 title="Detail" onPress={() => navigateToDetail(item)} />
                </View>
              </View>
            </View>
          )}
          onEndReached={fetchMorePlanets}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isFetchingMore ? <ActivityIndicator size="large" color="black" /> : null}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cardContainer: {
    marginBottom: 1,
    marginHorizontal:10
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,  
    // borderWidth: 0.5,
    borderColor: '#660072',  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.2, 
    shadowRadius: 1, 
    elevation: 3, 
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 3,
    color: 'black',
    fontFamily: 'Lato-Regular',  
  },
  cardText: {
    fontSize: 16,
    marginBottom: 3,
    color: 'black',
    fontFamily: 'Lato-Light', 
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListPlanetScreen;
