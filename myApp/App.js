import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import MyCards from './components/MyCards';
import Statistics from './components/Statistics';
import Settings from './components/Settings';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='My Cards' component={MyCards}/>
        <Tab.Screen name='Statistics' component={Statistics}/>
        <Tab.Screen name='Settings' component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


