import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function Statistics () {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Statistics Page</Text>
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