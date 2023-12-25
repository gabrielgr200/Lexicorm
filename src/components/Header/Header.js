import React from 'react';
import { View, StyleSheet, Text, StatusBar} from 'react-native';


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight - -14 : 64;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10,
    top: 10
  },
});
