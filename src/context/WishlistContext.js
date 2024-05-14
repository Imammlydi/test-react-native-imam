import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (planet) => {
    setWishlist([...wishlist, planet]);
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
