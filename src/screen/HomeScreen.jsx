import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <Image source={require('../assets/man.jpg')} style={styles.bannerImage} />

      <Text style={styles.titleText}>Learn React Native CLI</Text>
      <Text style={styles.describeText}>
        React Native is a JavaScript framework for building cross-platform
        mobile apps (for iOS and Android) using a shared codebase. It allows
        developers to leverage React, a popular JavaScript library for web
        development, to create native mobile applications. Essentially, it lets
        you write your app's UI in JavaScript and then render it as a native app
        on the target platform.{' '}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            {backgroundColor: colors.primary},
          ]}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButtonWrapper]}>
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  logo: {
    width: 113,
    height: 39,
    marginVertical: 30,
  },

  bannerImage: {
    width: 231,
    height: 250,
    marginVertical: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.primary,
    padding: 10,
    marginTop: 30,
    fontFamily: fonts.crenzo,
  },
  describeText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.secondary,
    padding: 10,
    fontFamily: fonts.light,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    width: '80%',
    height: 60,
    marginTop: 30,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 98,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.semiBold,
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: fonts.semiBold,
  },
});
