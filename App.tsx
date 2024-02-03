import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './android/app/src/Components/Header';
import InputField from './android/app/src/Components/InputField';

export default function App() {
  return (
    <SafeAreaView style={mainStyle.bodyStyle}>
      <Header />
      <InputField />
    </SafeAreaView>
  );
}

const mainStyle = StyleSheet.create({
  bodyStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});
