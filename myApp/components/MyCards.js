import React, {useContext} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import ThemeContext from '../global/themeContext';

export default function MyCards () {
  const {theme} = useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.container, theme.container]}>
        <Text style={[{fontSize: 24, fontWeight: '700', padding: 20},theme.text]}>
          Cards Page
        </Text>
        <View style={styles.card}>
          <Image source={require('../images/Card.png')}
            resizeMode='contain'
            style={{height: 300, width: 400}}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingRight: 10
  }
});