import {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import MyCards from './components/MyCards';
import Statistics from './components/Statistics';
import Settings from './components/Settings';
import ThemeContext, { ThemeProvider } from './global/themeContext';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

function AppNavigator() {
  const {theme} = useContext(ThemeContext);
  return (
      <NavigationContainer theme={theme.navigation}>
        <Tab.Navigator screenOptions={theme.tabBarStyle}> 
          <Tab.Screen 
          name='Home' 
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen 
          name='My Cards' 
          component={MyCards}
          options={{
            tabBarLabel: 'My Cards',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="credit-card-multiple-outline" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen 
          name='Statistics' 
          component={Statistics}
          options={{
            tabBarLabel: 'Statistics',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen 
          name='Settings' 
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
