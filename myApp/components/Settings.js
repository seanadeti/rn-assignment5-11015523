import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function Settings () {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.lang}>
          <Text>Language</Text>
          <View style={styles.line}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lang: {
    padding: 30,
    marginTop: 50,
   flexDirection: 'row'
  },
  line: {
    flex: 1,
    height: 1,
    width: '80%',
    backgroundColor: '#AFB0B6',
  },
  });