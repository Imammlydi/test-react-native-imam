import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import Button1 from '../components/Button1';
import HeaderMain from '../components/HeaderMain';

const ListPlanetScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const colors = ['#7469B6', '#AD88C6', '#E1AFD1', '#FFE6E6'];

  useEffect(() => {
    fetchPlanets();
  }, [page]);

  const fetchPlanets = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
      const data = await response.json();
      setPlanets((prevPlanets) => [...prevPlanets, ...data.results]);
      setFilteredPlanets((prevPlanets) => [...prevPlanets, ...data.results]);
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

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = planets.filter(planet => planet.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredPlanets(filtered);
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
      <HeaderMain title="List Planet" onSearch={handleSearch} showSearch={true} />
      <View style={styles.container}>
        {filteredPlanets.length === 0 && searchQuery !== '' ? (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No results found for "{searchQuery}"</Text>
          </View>
        ) : (
          <FlatList
            data={filteredPlanets}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <View style={{ height: 8 }} />
                <View style={[styles.card, { backgroundColor: getRandomColor() }]}>
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
            onEndReachedThreshold={0.5}
            ListFooterComponent={isFetchingMore ? <ActivityIndicator size="large" color="black" /> : null}
            showsVerticalScrollIndicator={false}
          />
        )}
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
    marginHorizontal: 10,
  },
  card: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#660072',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 0.2,
    elevation: 0.2,
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
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 18,
    color: '#660072',
    fontFamily: 'Lato-Bold',
  },
});

export default ListPlanetScreen;
