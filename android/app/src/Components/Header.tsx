import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View>
      <Text style={headerStyle.headerText}>Make Your Todo Here!</Text>
    </View>
  );
}

const headerStyle = StyleSheet.create({
  headerText: {
    justifyContent: 'center',
    fontSize: 27,
    backgroundColor: '#67E6DC',
    borderRadius: 20,
    marginRight: 130,
    marginLeft: 20,
    paddingLeft: 20,
    marginTop: 50,
    width: 350,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
