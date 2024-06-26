import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Switch, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Settings () {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listItem}>
        <Text style={styles.itemText}>Language</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#7E7E7E" />
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemText}>My Profile</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#7E7E7E" />
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemText}>Contact Us </Text>
        <Icon name="keyboard-arrow-right" size={24} color="#7E7E7E" />
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemText}>Change Password</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#7E7E7E" />
      </View>
      <View style={styles.listItem}>
        <Text style={styles.itemText}>Privacy Policy</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#7E7E7E" />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Theme</Text>
        <Switch />
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