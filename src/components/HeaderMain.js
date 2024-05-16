import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import PlanetIcon from './PlanetIcon';
import SearchIcon from './SearchIcon';
import CloseIcon from './CloseIcon'; // Pastikan ini adalah ikon yang benar
import * as Animatable from 'react-native-animatable';

const HeaderMain = ({ title, onSearch, showSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const toggleSearch = () => {
    if (isSearchActive) {
      setSearchQuery('');
    }
    setIsSearchActive(!isSearchActive);
  };

  return (
    <View style={[styles.container, { paddingTop: 15 }]}>
      <StatusBar backgroundColor="#660072" barStyle="light-content" />
      <PlanetIcon color="#fff" size={35} />
      <Text style={styles.title}>{title}</Text>
      {isSearchActive && (
        <Animatable.View animation="fadeInRight" duration={300} style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#ddd"
            value={searchQuery}
            onChangeText={handleSearch}
            autoFocus
          />
        </Animatable.View>
      )}
      <TouchableOpacity onPress={toggleSearch}>
        {isSearchActive ? (
          <CloseIcon color="#fff" size={24} />
        ) : (
          <SearchIcon color="#fff" size={24} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: '#660072',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: '#fff',
    marginLeft: 10,
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginLeft: 10,
    flex: 1,
  },
});

export default HeaderMain;
