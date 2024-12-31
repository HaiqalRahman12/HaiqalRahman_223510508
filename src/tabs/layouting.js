import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexBoxLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around', // Corrected quotes
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 10,
  },
});

export default FlexBoxLayout;