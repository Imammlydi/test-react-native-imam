// src/components/HeaderMain.js

import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const HeaderMain = ({ title }) => {
 

  return (
    <View style={[styles.container, { paddingTop: StatusBar.currentHeight ,}]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom:30,
    backgroundColor: '#660072', 
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
  },
  title: {
    fontSize: 18,
    color: '#fff', 
    fontFamily: 'Lato-Bold', 
  },
});

export default HeaderMain;
