
import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme: isDarkMode ? darkTheme : lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const lightTheme = {
  container: { backgroundColor: '#FFF' },
  text: { color: '#000' },
};

const darkTheme = {
  container: { backgroundColor: '#161622' },
  text: { color: '#FFF' },
  icons: { backgroundColor: '#808080'},
  blueText: {color: '#ADD8E6'},
  tabBarStyle: {
    tabBarStyle: { backgroundColor: '#2A2A36' },
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: '#fff',
  },
    statusBarStyle: 'light-content', 
    statusBarBackgroundColor: '#2A2A36',
  navigation: {
    dark: true,
    colors: {
      background: '#161622',
      card: '#2A2A36',
      text: '#FFFFFF',
      border: '#3A3A4A',
      primary: '#FF6347'
    },
  },
};

export default ThemeContext;
