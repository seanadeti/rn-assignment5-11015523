import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function MyCards () {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Cards Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });