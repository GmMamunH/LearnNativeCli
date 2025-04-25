import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text style={styles.text}>Hello! Developer. How are you? </Text>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.primary,
    padding: 10,
  },
});
