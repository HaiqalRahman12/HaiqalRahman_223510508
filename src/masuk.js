import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Masuk = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Silakan masuk</Text>
      <Button
        title="Masuk"
        onPress={() => navigation.navigate('Main', { screen: 'Diagram' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
});

export default Masuk;
