
import React, { createContext, useState, useEffect } from 'react';
import * as Font from 'expo-font';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Lato-Black': require('../../assets/fonts/Lato-Black.ttf'),
        'Lato-BlackItalic': require('../../assets/fonts/Lato-BlackItalic.ttf'),
        'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
        'Lato-BoldItalic': require('../../assets/fonts/Lato-BoldItalic.ttf'),
        'Lato-Italic': require('../../assets/fonts/Lato-Italic.ttf'),
        'Lato-Light': require('../../assets/fonts/Lato-Light.ttf'),
        'Lato-LightItalic': require('../../assets/fonts/Lato-LightItalic.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
        'Lato-Thin': require('../../assets/fonts/Lato-Thin.ttf'),
        'Lato-ThinItalic': require('../../assets/fonts/Lato-ThinItalic.ttf'),
      });
      setIsFontLoaded(true);
    };

    loadFonts();
  }, []);

  return (
    <FontContext.Provider value={{ isFontLoaded }}>
      {children}
    </FontContext.Provider>
  );
};
