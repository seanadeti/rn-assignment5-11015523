import React, {useContext} from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import ThemeContext from '../global/themeContext';

export default function Statistics () {
  const {theme} = useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.container, theme.container]}>
        <Text style={[{fontSize: 24, fontWeight: '700', padding: 20}, theme.text]}>
          Statistics Page
        </Text>
        <View style={{justifyContent:'center', alignItems:'center', flex: 1}}>
          <Text style={theme.text}>
            There are currently no Statistics available, come back later!
          </Text>        
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });