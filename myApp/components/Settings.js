import React, {useContext} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ThemeContext from '../global/themeContext';


export default function Settings () {
  const { isDarkMode, toggleTheme, theme } = useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.container, theme.container]}>
      <View style={styles.listItem}>
        <Text style={[styles.itemText, theme.text]}>Language</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#7E7E7E" />
      </View>
      <View style={styles.listItem}>
        <Text style={[styles.itemText, theme.text]}>My Profile</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#7E7E7E" />
      </View>
      <View style={styles.listItem}>
        <Text style={[styles.itemText, theme.text]}>Contact Us </Text>
        <Icon name="keyboard-arrow-right" size={24} color="#7E7E7E" />
      </View>
      <View style={styles.listItem}>
        <Text style={[styles.itemText, theme.text]}>Change Password</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#7E7E7E" />
      </View>
      <View style={styles.listItem}>
        <Text style={[styles.itemText, theme.text]}>Privacy Policy</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#7E7E7E" />
      </View>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, theme.text]}>Theme</Text>
        <Switch 
        value={isDarkMode}
        onValueChange={toggleTheme}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemText: {
    fontSize: 18,
    color: '#000',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30
  },
  switchText: {
    fontSize: 24,
    fontWeight: '600'
  },
});