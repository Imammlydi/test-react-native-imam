import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PlanetIcon from './PlanetIcon'; 

const HeaderMain = ({ title }) => {
 

  return (
    <View style={[styles.container, { paddingTop: 15 ,}]}>
      <StatusBar backgroundColor="#660072" barStyle="light-content" />

       <PlanetIcon color="#fff" size={35} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom:20,
    backgroundColor: '#660072', 
    // paddingTop:StatusBar.currentHeight
    // borderBottomLeftRadius:25,
    // borderBottomRightRadius:25
  },
  title: {
    fontSize: 18,
    // color: '#fff', 
    fontFamily: 'Lato-Bold', 
    color:'#fff',
    marginLeft:10
  },
});

export default HeaderMain;
