import React, { createContext, useState } from 'react';
import { showMessage } from 'react-native-flash-message';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (planet) => {
    const exists = wishlist.some(item => item.name === planet.name);
    if (exists) {
      showMessage({
        message: "Warning",
        description: `${planet.name} is already in your wishlist.`,
        type: "warning",
      });
    } else {
      setWishlist([...wishlist, planet]);
      showMessage({
        message: "Added to Wishlist",
        description: `${planet.name} has been added to your wishlist.`,
        type: "success",
      });
    }
  };

  const removeFromWishlist = (planet) => {
    const index = wishlist.findIndex(item => item.name === planet.name);
    if (index !== -1) {
      const newWishlist = [...wishlist];
      newWishlist.splice(index, 1);
      setWishlist(newWishlist);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
