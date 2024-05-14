import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListPlanetScreen from './src/Screen/ListPlanetScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ListPlanetScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
