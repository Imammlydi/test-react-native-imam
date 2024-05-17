import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { WishlistContext } from '../context/WishlistContext';
import Button1 from '../components/Button1';
import HeaderMain from '../components/HeaderMain';
import { showMessage } from 'react-native-flash-message';

const WishlistScreen = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const handleRemoveFromWishlist = (item) => {
    removeFromWishlist(item);
    showMessage({
      message: "Removed from Wishlist",
      description: `${item.name} has been removed from your wishlist.`,
      type: "danger",
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Button1 title="Delete" color='#b52114' onPress={() => handleRemoveFromWishlist(item)} />
    </View>
  );

  return (
    <>
      <HeaderMain title={"Wishlist"} />
      <View style={styles.container}>
        {wishlist.length > 0 ? (
          <FlatList
            data={wishlist}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.empty}>No items in wishlist</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily:'Lato-Light'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  empty: {
    fontSize: 18,
    color: '#888',
    fontFamily:'Lato-Regular'
  },
});

export default WishlistScreen;
