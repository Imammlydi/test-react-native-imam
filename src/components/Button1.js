
import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button1 = ({ onPress, title, color = '#660072' }) => {  // Default color is #f24e1e
  
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { borderColor: color }]}>
      <Text style={[styles.buttonText, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    // borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default Button1;
