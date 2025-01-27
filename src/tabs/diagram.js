import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleBarChart = ({ fetchValues }) => {
  const [leftValue, setLeftValue] = useState(50);
  const [rightValue, setRightValue] = useState(50);

  useEffect(() => {
    const getData = async () => {
      try {
        const { left, right } = await fetchValues();
        setLeftValue(left);
        setRightValue(right);
      } catch (error) {
        console.error('Error fetching values:', error);
      }
    };

    getData();
  }, [fetchValues]);

  const totalValue = leftValue + rightValue;
  const leftPercentage = (leftValue / totalValue) * 100;
  const rightPercentage = (rightValue / totalValue) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Left: {leftValue}</Text>
      <View style={styles.barContainer}>
        <View
          style={[
            styles.barSegment,
            { backgroundColor: 'blue', width: `${leftPercentage}%` },
          ]}
        />
        <View
          style={[
            styles.barSegment,
            { backgroundColor: 'red', width: `${rightPercentage}%` },
          ]}
        />
      </View>
      <Text style={styles.label}>Right: {rightValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  barContainer: {
    flexDirection: 'row',
    height: 30,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  barSegment: {
    height: '100%',
  },
});

export default SingleBarChart;
